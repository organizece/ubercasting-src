class WebsitesController < ApplicationController
  before_filter :authenticate_agency!

  def edit
    @website = Website.find(params[:id])
    redirect_to agency_root_path if @website.agency != current_agency
  end

  def update
    @website = Website.find(params[:id])

    respond_to do |format|
      if @website.update_attributes(params[:website])
        format.html { redirect_to edit_website_path(@website), notice: 'Website atualizado com sucesso.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @website.errors, status: :unprocessable_entity }
      end
    end
  end

  def verify_subdomain
    website = Website.find_by_subdomain(params[:subdomain])
    respond_to do |format|
      if website && website.agency != current_agency
        format.js { flash[:error] = 'Dominio ja utilizado!' }
      else
        format.js { flash[:notice] = 'Dominio livre!' }
      end
    end
  end

end