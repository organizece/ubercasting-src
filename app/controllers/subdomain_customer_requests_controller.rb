class SubdomainCustomerRequestsController < ApplicationController
  layout :subdomain_layout

  before_filter :validate_customer

  def new
    @request = AgencyCustomerRequest.new
    @website = Website.find_by_subdomain(request.subdomain)
  end

  def create
    @request = AgencyCustomerRequest.new(params[:agency_customer_request])
    @website = Website.find_by_subdomain(request.subdomain)
    @request.agency = @website.agency

    respond_to do |format|
      if @request.save
        format.html { redirect_to subdomain_new_customer_request_path(request.subdomain), notice: 'Pedido criado com sucesso.' }
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
    if request.subdomain && !request.subdomain.empty?
      website = Website.find_by_subdomain(request.subdomain)
      website.theme
    else
      'subdomain_default'
    end
  end

  def validate_customer
    # Only change the default route to the current subdomain when customer log in
    store_location(request.subdomain)
  end

end
