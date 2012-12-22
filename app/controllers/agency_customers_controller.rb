class AgencyCustomersController < ApplicationController
  before_filter :authenticate_agency!

  def index
    @agency_customers = AgencyCustomer.search(params[:name], current_agency.id, nil).
      order(sort_column).page(params[:page]).per(per_page)
  end

private

  def sort_column
    column = "created_at asc"

    if params[:order_column]
      sort = params[:order_column].split(';') 
      column = sort[0] + ' ' + sort[1] if AgencyCustomer.column_names.include?(sort[0])
      column = sort[0] + ' ' + sort[1] if Customer.column_names.include?(sort[0])
    end
    
    column
  end

  def per_page
    ITENS_PER_PAGE.include?(params[:itens_per_page]) ? params[:itens_per_page] : 6
  end
end
