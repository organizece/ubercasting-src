class CastingsController < ApplicationController
  before_filter :validate_agency

  # GET /castings
  # GET /castings.json
  def index
    @castings = Casting.search(params[:name], current_agency.id).
      order(index_sort_column).page(params[:page]).per(per_page)
    @casting = Casting.new
  end

  # GET /castings/1
  # GET /castings/1.json
  def show
    @casting = Casting.find(params[:id])
    @casting_models = ModelCasting.where(casting_id: @casting.id).joins(:model)

    @casting_models_ids = []
    @casting_models.each do |casting_model|
      @casting_models_ids << casting_model.id
    end
    @casting_models_ids = @casting_models_ids.join(',')
  
    @casting_models = @casting_models.order(show_sort_column).page(params[:page]).per(per_page)
  end

  # GET /castings/new
  # GET /castings/new.json
  def new
    @casting = Casting.new
  end

  # GET /castings/1/edit
  def edit
    @casting = Casting.find(params[:id])
  end

  # POST /castings
  # POST /castings.json
  def create
    @casting = Casting.new(params[:casting])
    @casting.agency = current_agency

    respond_to do |format|
      if @casting.create_limit_reached?
        format.html { render action: "new" }
        format.js { flash[:error] = "Voce nao pode mais criar castings. Por favor verifique os limites do seu plano" }
      elsif @casting.save
        flash[:alert]  = "Limite do numero de castings cadastrados atingido." if @casting.create_limit_reached?
        format.html { redirect_to @casting, notice: 'Casting criado com sucesso.' }
        format.js { flash[:notice] = 'Casting criado com sucesso.' }
      else
        format.html { render action: "new" }
        format.js
      end
    end
  end

  # PUT /castings/1
  # PUT /castings/1.json
  def update
    @casting = Casting.find(params[:id])

    respond_to do |format|
      if @casting.update_attributes(params[:casting])
        format.html { redirect_to @casting, notice: 'Casting atualizado com sucesso.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @casting.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /castings/1
  # DELETE /castings/1.json
  def destroy
    @casting = Casting.find(params[:id])
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
        model_casting = Casting.find(Integer(casting_id))
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
      @castings = Casting.where(agency_id: current_agency.id)
      @customer_castings = CustomerCasting.where(agency_id: current_agency.id)
    end
  end

  def save_add_models
    models = params[:models_id].split(',') if params[:models_id]

    casting = nil
    if params[:type].to_sym == :create_and_add
      casting = Casting.new
      casting.name = params[:casting_name]
      casting.agency = current_agency
      if casting.valid?
        casting.save
      else
        flash[:error] = casting.errors
      end
    elsif params[:type].to_sym == :add_only
      casting = Casting.find(params[:casting_id])
    end

    # Only try to add a new relation if there is a valid casting
    if !flash[:error] && casting
      models.each do |model_id|
        model_casting = ModelCasting.new
        model_casting.casting_id = casting.id if casting
        model_casting.model_id = Integer(model_id)
        # Only try to add a new relation if it don't exists
        unless ModelCasting.find_by_casting_id_and_model_id(model_casting.casting_id, model_casting.model_id)
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
        model_casting = ModelCasting.find(Integer(model_casting_id))
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

  def open_share
    customers = AgencyCustomer.where(agency_id: current_agency.id)
    @customers_names = Array.new
    customers.each do |customer|
      @customers_names.push(customer.name + ' - ' + customer.email)
    end

    @casting = Casting.find(params[:casting_id])
  end

  def share
    casting = Casting.find(params[:casting_id])
    params[:customer].split(';').each do |cust|
      customer = cust.split(' - ')
      customer = customer[customer.length - 1]
      agency_customer = AgencyCustomer.find_by_email(customer)

      if agency_customer
        customer_casting = CustomerCasting.new
        customer_casting.agency = current_agency
        customer_casting.agency_customer = agency_customer
        customer_casting.name = casting.name

        if customer_casting.valid?
          customer_casting.save
        else
          flash[:error] = 'Ocorreu um erro ao compartilhar o casting.'
        end

        if !flash[:error] && customer_casting
          casting.models.each do |model|
            model_casting = ModelCustomerCasting.new
            model_casting.customer_casting = customer_casting
            model_casting.model = model

            if model_casting.valid?
              model_casting.save
            else
              flash[:error] = 'Ocorreu um erro ao compartilhar o casting.'
            end
          end
          if !flash[:error]
            CastingMailer.share_casting(customer_casting).deliver
            flash[:notice] = 'Casting compartilhado com sucesso.'
          end
        end
      else
        flash[:error] = 'Problema ao buscar cliente para compartilhamento.'
      end
    end

    respond_to do |format|
      format.js
    end

  end

  def export
    @casting = Casting.find(params[:casting_id])
    @models = @casting.models
    respond_to do |format|
      format.xls
    end
  end

private

  def index_sort_column
    column = "created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if Casting.column_names.include?(sort[0])
    end
    
    column
  end

  def show_sort_column
    column = "model_castings.created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if Model.column_names.include?(sort[0])
      column = sort[0] + ' ' + sort[1] if ModelCasting.column_names.include?(sort[0])
    end
    
    column
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : ITENS_PER_PAGE[0]
  end

  def validate_agency
    # Clear the location of subdomain
    clear_location

    # First runs the Devise authenticator
    authenticate_agency!

    # Check if the agency is active
    check_active_agency

    # If agency is loged in validate if it has permission to access the controller
    unless current_agency.subscription.casting_access?
      flash[:error] = 'O seu perfil de assinatura nao tem permissao p/ acessar a funcionalidade.'
      redirect_to agency_root_path
    end
  end

end
