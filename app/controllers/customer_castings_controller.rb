class CustomerCastingsController < ApplicationController
  before_filter :validate_agency

  def index
    @castings = CustomerCasting.search(params[:name], current_agency.id, nil).
      order(index_sort_column).page(params[:page]).per(per_page)
    @casting = CustomerCasting.new
  end

  def show
    @casting = CustomerCasting.find(params[:id])
    @casting_models = ModelCustomerCasting.where(customer_casting_id: @casting.id).joins(:model)

    @casting_models_ids = []
    @casting_models.each do |casting_model|
      @casting_models_ids << casting_model.id
    end
    @casting_models_ids = @casting_models_ids.join(',')

    @casting_models = @casting_models.order(show_sort_column).page(params[:page]).per(per_page)
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

  def save_add_models
    models = params[:models].split(',') if params[:models]
    casting = CustomerCasting.find(params[:casting_id])

    models.each do |model_id|
      model_casting = ModelCustomerCasting.new
      model_casting.customer_casting_id = casting.id
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

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = "Modelos adicionados ao pedido de casting #{casting.name} com sucesso." }
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
    @customer_casting = CustomerCasting.find(params[:customer_casting_id])
    @agency = @customer_casting.agency
    @customer = @customer_casting.agency_customer

    @messages = @customer_casting.customer_casting_messages.order(messages_sort_column)

    @message = CustomerCastingMessage.new

    # Update customer_casting to hide message control
    @customer_casting.customer_new_message = false
    @customer_casting.save
  end

  def save_messages
    @customer_casting = CustomerCasting.find(params[:customer_casting_id])

    @message = CustomerCastingMessage.new(params[:customer_casting_message])
    @message.sender = @customer_casting.agency
    @message.receiver = @customer_casting.agency_customer
    @message.customer_casting = @customer_casting

    if @message.save
      # Update customer_casting to show message control
      @customer_casting.agency_new_message = true
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

  def open_external_url
    @casting_url = subdomain_casting_url(params[:customer_casting_id], subdomain: current_agency.website.subdomain)
  end

private

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

private

  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!

    # If agency is loged in validate if it has permission to access the controller
    unless current_agency.subscription.casting_access?
      flash[:error] = 'O seu perfil de assinatura nao tem permissao p/ acessar a funcionalidade.'
      redirect_to agency_root_path
    end
  end

end