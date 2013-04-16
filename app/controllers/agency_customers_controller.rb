class AgencyCustomersController < ApplicationController
  before_filter :validate_agency

  def index
    @agency_customers = AgencyCustomer.search(params[:name], current_agency.id, nil).
      order(sort_column).page(params[:page]).per(per_page)
  end

  def show
    @agency_customer = AgencyCustomer.find(params[:id])
  end

  def new
    @agency_customer = AgencyCustomer.new
  end

  def new_from_request
    @agency_customer = AgencyCustomer.new
    @request = current_agency.agency_customer_requests.find(params[:request_id])

    if @request
      @agency_customer.name = @request.name
      @agency_customer.email = @request.email
      @agency_customer.phone = @request.phone
      @agency_customer.trade_name = @request.company
      @agency_customer.corporate_name = @request.company
    end

    render :new
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
        format.html { redirect_to agency_customers_path, notice: 'Cliente criado com sucesso.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  def edit
    @agency_customer = AgencyCustomer.find(params[:id])
  end

  def update
    params[:agency_customer].delete("email")

    @agency_customer = AgencyCustomer.find(params[:id])

    respond_to do |format|
      if @agency_customer.update_attributes(params[:agency_customer])
        format.html { redirect_to agency_customers_path, notice: 'Cliente atualizado com sucesso.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @agency_customer.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @agency_customer = AgencyCustomer.find(params[:id])
    @agency_customer.destroy

    flash[:notice] = 'Cliente deletado com sucesso.'

    respond_to do |format|
      format.html { redirect_to agency_customers_url }
      format.js
    end
  end

  def destroy_selected
    agency_customers = params[:agency_customers].split(',') if params[:agency_customers]
    if agency_customers
      agency_customers.each do |agency_customer_id|
        model_casting = AgencyCustomer.find(Integer(agency_customer_id))
        model_casting.destroy
      end
    else
      flash[:error] = 'Selecione ao menos um cliente.'
    end

    respond_to do |format|
      if flash[:error]
        format.js
      else
        format.js { flash[:notice] = 'Clientes removidos com sucesso.' }
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

  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!

    # If agency is loged in validate if it has permission to access the controller
    unless current_agency.subscription.customer_access?
      flash[:error] = 'O seu perfil de assinatura nao tem permissao p/ acessar a funcionalidade.'
      redirect_to agency_root_path
    end
  end

end
