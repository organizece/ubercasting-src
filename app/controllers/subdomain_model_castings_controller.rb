class SubdomainModelCastingsController < ApplicationController
  before_filter :authenticate_agency!

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

end
