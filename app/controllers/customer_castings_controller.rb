class CustomerCastingsController < ApplicationController
  before_filter :authenticate_agency!

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

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

end