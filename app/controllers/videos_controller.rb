class VideosController < ApplicationController
    before_filter :validate_agency
  
    def destroy
        @model = current_agency.models.find_by_id(params[:model_id])
        video = @model.videos.find(params[:id]) if @model
        video.destroy if video
        respond_to do |format|
            format.js { flash[:notice] = 'Video excluido com sucesso.' }
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
