class SubdomainCustomerRequestsController < ApplicationController
  layout :subdomain_layout

  def new
    @request = AgencyCustomerRequest.new
    @website = Website.find_by_subdomain(params[:subdomain])
  end

  def create
    @request = AgencyCustomerRequest.new(params[:agency_customer_request])
    @website = Website.find_by_subdomain(params[:subdomain])
    @request.agency = @website.agency

    respond_to do |format|
      if @request.save
        format.html { redirect_to subdomain_new_customer_request_path(params[:subdomain]), notice: 'Pedido criado com sucesso.' }
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

  def subdomain_layout
    if params[:subdomain] && !params[:subdomain].empty?
      website = Website.find_by_subdomain(params[:subdomain])
      website.theme
    else
      'subdomain_default'
    end
  end

  def validate_customer
    # First runs the Devise authenticator
    authenticate_customer!

    # If customer is loged in validate if it has an association with the agency
    website = Website.find_by_subdomain(params[:subdomain])
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(website.agency.id, current_customer.id)

    redirect_to subdomain_websites_casting_foreign_path(params[:subdomain]) unless agency_customer
  end

end
