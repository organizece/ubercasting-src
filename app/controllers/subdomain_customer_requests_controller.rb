class SubdomainCustomerRequestsController < ApplicationController
  before_filter :validate_customer

  def new
    @request = AgencyCustomerRequest.new
  end

  def create
    @request = AgencyCustomerRequest.new(params[:request])
    @request.agency = Website.find_by_subdomain(params[:subdomain]).agency

    respond_to do |format|
      if @request.save
        format.html { redirect_to subdomain_websites_home_path(params[:subdomain]), notice: 'Pedido criado com sucesso.' }
        format.json { render json: @request, status: :created, location: @request }
        format.js { flash[:notice] = 'Pedido criado com sucesso.' }
      else
        format.html { render action: "new" }
        format.json { render json: @request.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

private

  def validate_customer
    # First runs the Devise authenticator
    authenticate_customer!

    # If customer is loged in validate if it has an association with the agency
    website = Website.find_by_subdomain(params[:subdomain])
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(website.agency.id, current_customer.id)

    redirect_to subdomain_websites_casting_foreign_path(params[:subdomain]) unless agency_customer
  end

end
