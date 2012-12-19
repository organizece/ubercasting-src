class SubdomainCastingsController < ApplicationController
  layout :subdomain_layout

  def index
    @website = Website.find_by_subdomain(params[:subdomain])
    @castings = CustomerCasting.search(params[:name], @website.agency.id, current_customer.id).
      order(index_sort_column).page(params[:page]).per(per_page)
    @casting = CustomerCasting.new
  end

  def show
    @website = Website.find_by_subdomain(params[:subdomain])
    @casting = CustomerCasting.find(params[:id])
    @casting_models = ModelCustomerCasting.where(customer_casting_id: @casting.id).joins(:model).
      order(show_sort_column).page(params[:page]).per(per_page)
  end

  def create
    @casting = CustomerCasting.new(params[:customer_casting])
    @casting.agency = Website.find_by_subdomain(params[:subdomain]).agency
    @casting.customer = current_customer

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

private
  def subdomain_layout
    if params[:subdomain] && !params[:subdomain].empty?
      website = Website.find_by_subdomain(params[:subdomain])
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

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

end