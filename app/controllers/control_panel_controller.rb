class ControlPanelController < ApplicationController
  before_filter :authenticate_agency!

  def show
    @agency = current_agency
    @castings = CustomerCasting.all
    @agency_customers = AgencyCustomer.all
    
    if !@agency.website.subdomain
      redirect_to website_guide_path(@agency.website)
    end
    
  end
  
end
