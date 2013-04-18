class SubdomainModelCastingsController < ApplicationController
  before_filter :validate_customer

  def destroy
    @casting_model = ModelCustomerCasting.find(params[:id])

    @casting_model.destroy

    respond_to do |format|
      format.js { flash[:notice] = 'Modelo removido do casting com sucesso.' }
    end
  end

  def update_score
    @casting_model = ModelCustomerCasting.find(params[:id])
    @casting_model.score = Integer(params[:score])

    @casting_model.save

    respond_to do |format|
      format.js
    end
  end

private

  def validate_customer
    # Change the default route to the current subdomain when customer log in
    store_location(params[:subdomain])

    # First runs the Devise authenticator
    authenticate_customer!

    # If customer is loged in validate if it has an association with the agency
    website = Website.find_by_subdomain(params[:subdomain])
    agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(website.agency.id, current_customer.id)

    redirect_to subdomain_websites_casting_foreign_path(params[:subdomain]) unless agency_customer
  end

end
