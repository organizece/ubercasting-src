class ModelCastingsController < ApplicationController
  before_filter :authenticate_agency!

  def destroy
    @casting_model = ModelCasting.find(params[:id])
    casting = Casting.find(@casting_model.casting_id)

    @casting_model.destroy

    respond_to do |format|
      format.html { redirect_to casting_path(casting) }
      format.json { head :no_content }
      format.js { flash[:notice] = 'Modelo desassociado do casting com sucesso.' }
    end
  end

  def update_score
    @casting_model = ModelCasting.find(params[:model_casting_id])
    @casting_model.score = Integer(params[:score])

    @casting_model.save

    respond_to do |format|
      format.js
    end
  end

end
