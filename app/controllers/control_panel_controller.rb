class ControlPanelController < ApplicationController
  before_filter :validate_agency

  def show
    @agency = current_agency
    @castings = CustomerCasting.all
    @agency_customers = AgencyCustomer.all

    # Counts for Requests Summary
    @casting_requests = @agency.customer_castings.count
    @customer_requests = @agency.agency_customer_requests.where(new_request: true).count
    @new_messages = @agency.customer_castings.where(customer_new_message: true).count
    
    if !@agency.website.subdomain
      redirect_to website_guide_intro_path(@agency.website)
    end
    
  end

private

  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!
  end
  
end
