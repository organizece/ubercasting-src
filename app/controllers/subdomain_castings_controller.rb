class SubdomainCastingsController < ApplicationController
  layout :subdomain_layout

  before_filter :validate_customer, except: [:show]

  def index
    @website = Website.find_by_subdomain(request.subdomain)
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(@website.agency.id, current_customer.id)

    @castings = CustomerCasting.search(params[:name], @website.agency.id, agency_customer.id).
      order(index_sort_column).page(params[:page]).per(per_page)
    @casting = CustomerCasting.new
  end

  def show
    @website = Website.find_by_subdomain(request.subdomain)
    @casting = CustomerCasting.find(params[:id])
    @casting_models = ModelCustomerCasting.where(customer_casting_id: @casting.id).joins(:model)

    @casting_models_ids = []
    @casting_models.each do |casting_model|
      @casting_models_ids << casting_model.id
    end
    @casting_models_ids = @casting_models_ids.join(',')

    @casting_models = @casting_models.order(show_sort_column).page(params[:page]).per(per_page)

    # Change the default route to the current subdomain when customer log in
    store_custom_location("#{request.protocol}#{request.host_with_port}#{request.fullpath}")

    # Find out the visualization mode
    @visualization_mode = :read_only
    @visualization_mode = :total_access if @casting.owner?(current_customer)
  end

  def create
    @casting = CustomerCasting.new(params[:customer_casting])
    @casting.agency = Website.find_by_subdomain(request.subdomain).agency
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(@casting.agency.id, current_customer.id)
    @casting.agency_customer = agency_customer

    respond_to do |format|
      if @casting.save
        format.html { redirect_to @casting, notice: 'Casting criado com sucesso.' }
        format.json { render json: @casting, status: :created, location: @casting }
        format.js { flash[:notice] = 'Casting criado com sucesso.' }
      else
        format.html { render action: "new" }
        format.json { render json: @casting.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  def destroy
    @casting = CustomerCasting.find(params[:id])
    @casting.destroy

    respond_to do |format|
      format.html { redirect_to castings_url }
      format.json { head :no_content }
      format.js { flash[:notice] = 'Casting deletado com sucesso.' }
    end
  end

  def destroy_selected
    castings = params[:castings].split(',') if params[:castings]
    if castings
      castings.each do |casting_id|
        model_casting = CustomerCasting.find(Integer(casting_id))
        model_casting.destroy
      end
    else
      flash[:error] = 'Selecione ao menos um casting.'
    end

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = 'Castings removidos com sucesso.' }
      end
    end
  end

  def open_add_models
    if params[:models_id].blank?
      flash[:error] = 'Selecione ao menos um modelo'
    else
      agency = Website.find_by_subdomain(request.subdomain).agency
      agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(agency.id, current_customer.id)

      @castings = CustomerCasting.where(agency_id: agency.id).where(agency_customer_id: agency_customer.id)
    end
  end

  def save_add_models
    agency = Website.find_by_subdomain(request.subdomain).agency
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(agency.id, current_customer.id)

    models = params[:models_id].split(',') if params[:models_id]

    casting = nil
    if params[:type].to_sym == :create_and_add
      casting = CustomerCasting.new
      casting.name = params[:casting_name]
      casting.agency = agency
      casting.agency_customer = agency_customer
      if casting.valid?
        casting.save
      else
        flash[:error] = casting.errors
      end
    elsif params[:type].to_sym == :add_only
      casting = CustomerCasting.find(params[:casting_id])
    end

    # Only try to add a new relation if there is a valid casting
    if !flash[:error] && casting
      models.each do |model_id|
        model_casting = ModelCustomerCasting.new
        model_casting.customer_casting_id = casting.id if casting
        model_casting.model_id = Integer(model_id)
        # Only try to add a new relation if it don't exists
        unless ModelCustomerCasting.find_by_customer_casting_id_and_model_id(model_casting.customer_casting_id, model_casting.model_id)
          if model_casting.valid?
            model_casting.save
          else
            flash[:error] += model_casting.errors
          end
        end
      end
    end

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = "Modelos adicionados ao casting #{casting.name} com sucesso." }
      end
    end
  end

  def remove_models
    if params[:model_castings].blank?
      flash[:error] = 'Selecione ao menos um modelo.'
    else
      model_castings = params[:model_castings].split(',')
      model_castings.each do |model_casting_id|
        model_casting = ModelCustomerCasting.find(Integer(model_casting_id))
        model_casting.destroy
      end
    end

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = 'Modelos removidos com sucesso.' }
      end
    end
  end

  def open_messages
    @customer_casting = CustomerCasting.find(params[:id])
    @agency = @customer_casting.agency
    @customer = @customer_casting.agency_customer

    @messages = @customer_casting.customer_casting_messages.order(messages_sort_column)

    @message = CustomerCastingMessage.new

    # Update customer_casting to hide message control
    @customer_casting.agency_new_message = false
    @customer_casting.save
  end

  def save_messages
    @customer_casting = CustomerCasting.find(params[:id])

    @message = CustomerCastingMessage.new(params[:customer_casting_message])
    @message.sender = @customer_casting.agency_customer
    @message.receiver = @customer_casting.agency
    @message.customer_casting = @customer_casting

    if @message.save
      @customer_casting.customer_new_message = true
      if !@customer_casting.save
        flash[:error] = @customer_casting.errors
      else
        CastingMailer.alert_new_message(@customer_casting, @message.sender, @message.receiver).deliver
      end
    else
      flash[:error] = @message.errors
    end

    respond_to do |format|
      if flash[:error]
        format.js { flash[:notice] = 'Problema ao enviar mensagem.' }
      else
        format.js { flash[:notice] = 'Mensagem enviada com sucesso.' }
      end
    end
  end

private
  def subdomain_layout
    if request.subdomain && !request.subdomain.empty?
      website = Website.find_by_subdomain(request.subdomain)
      website.theme
    else
      'subdomain_default'
    end
  end

  def index_sort_column
    column = "created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if CustomerCasting.column_names.include?(sort[0])
    end
    
    column
  end

  def show_sort_column
    column = "model_customer_castings.created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if Model.column_names.include?(sort[0])
      column = sort[0] + ' ' + sort[1] if ModelCustomerCasting.column_names.include?(sort[0])
    end
    
    column
  end

  def messages_sort_column
    'created_at asc'
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

  def validate_customer
    # Change the default route to the current subdomain when customer log in
    store_custom_location("#{request.protocol}#{request.host_with_port}#{request.fullpath}")

    # First runs the Devise authenticator
    authenticate_customer!

    # If customer is loged in validate if it has an association with the agency
    website = Website.find_by_subdomain(request.subdomain)
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(website.agency.id, current_customer.id)

    redirect_to subdomain_websites_casting_foreign_path(request.subdomain) unless agency_customer
  end

end