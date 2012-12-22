class AgencyCustomersController < ApplicationController
  before_filter :authenticate_agency!

  def index
    @agency_customers = AgencyCustomer.search(params[:name], current_agency.id, nil).
      order(sort_column).page(params[:page]).per(per_page)
  end

  def new
    @agency_customer = AgencyCustomer.new
  end

  def create
    @agency_customer = AgencyCustomer.new(params[:agency_customer])

    @agency_customer.agency = current_agency
    customer = Customer.find_by_email(@agency_customer.email)
    if customer
      @agency_customer.customer = customer
    else
      customer = Customer.new
      customer.email = @agency_customer.email
      customer.save!
      @agency_customer.customer = customer
    end

    respond_to do |format|
      if @agency_customer.save
        format.html { redirect_to @casting, notice: 'Cliente criado com sucesso.' }
      else
        format.html { render action: "new" }
      end
    end
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
