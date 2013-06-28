class ModelCustomerCastingsController < ApplicationController
  before_filter :validate_agency

  def destroy
    @casting_model = ModelCustomerCasting.find(params[:id])

    @casting_model.destroy

    respond_to do |format|
      format.js { flash[:notice] = 'Modelo removido do casting com sucesso.' }
    end
  end

  def update_score
    @casting_model = ModelCustomerCasting.find(params[:model_customer_casting_id])
    @casting_model.score = Integer(params[:score])

    @casting_model.save

    respond_to do |format|
      format.js
    end
  end

private

  def validate_agency
    # Clear the location of subdomain
    clear_location

    # First runs the Devise authenticator
    authenticate_agency!

    # Check if the agency is active
    check_active_agency
  end

end