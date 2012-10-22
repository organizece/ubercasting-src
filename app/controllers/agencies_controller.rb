class AgenciesController < ActionController::Base
    before_filter :authenticate_agency!
    before_filter :first_access?, except: [:edit, :update]

    layout "application"

    def show
      @agency = current_agency
    end

    def edit
      @agency = Agency.find(params[:id])
    end

    def update
      @agency = Agency.find(params[:id])

      respond_to do |format|
        if @agency.update_attributes(params[:agency])
          format.html { redirect_to @agency, notice: 'Agency was successfully updated.' }
          format.json { head :no_content }
        else
          format.html { render action: :edit }
          format.json { render json: @agency.errors, status: :unprocessable_entity }
        end
      end
    end

    def first_access?
      redirect_to edit_agency_path(current_agency) if current_agency.domain == nil
    end

end