class AgencyCustomerRequestsController < ApplicationController
  before_filter :validate_agency

  def index
    @requests = AgencyCustomerRequest.search(params[:name], current_agency.id, nil).
      order(sort_column).page(params[:page]).per(per_page)
  end

  def show
    @request = AgencyCustomerRequest.find(params[:id])
    @request.new_request = false
    @request.save!
  end

  def destroy
    @request = AgencyCustomerRequest.find(params[:id])
    @request.destroy

    flash[:notice] = 'Pedido removido com sucesso.'

    respond_to do |format|
      format.html { redirect_to agency_customer_requests_url }
      format.js
    end
  end

  def destroy_selected
    requests = params[:requests].split(',') if params[:requests]
    if requests
      requests.each do |request_id|
        request = AgencyCustomerRequest.find(Integer(request_id))
        request.destroy
      end
    else
      flash[:error] = 'Selecione ao menos um pedido.'
    end

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = 'Pedidos removidos com sucesso.' }
      end
    end
  end

private

  def sort_column
    column = "created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if AgencyCustomerRequest.column_names.include?(sort[0])
    end
    
    column
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end

  def validate_agency
    # Clear the location of subdomain
    clear_location

    # Runs the Devise authenticator
    authenticate_agency!
  end

end
