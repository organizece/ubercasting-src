class WebsitesController < ApplicationController
  before_filter :validate_agency

  def edit
    @website = Website.find(params[:id])
    redirect_to agency_root_path if @website.agency != current_agency
    @agency = @website.agency

    @themes = @agency.subscription.themes
    @themes += @agency.themes
  end

  def update
    @website = Website.find(params[:id])

    if params[:feature_models]
      # Clear features
      current_agency.models.where(feature: true).each do |model|
        model.feature = false
        model.feature_number = 0
        model.save!
      end
      # Set features
      (1..15).each do |feat_num|
        feat_model = params["feature#{feat_num}"]
        if !feat_model.blank?
          model = current_agency.models.find(feat_model)
          model.feature = true
          model.feature_number = feat_num
          model.save!
        end
      end
      flash[:notice] = 'Website atualizado com sucesso.'
    else
      if @website.update_attributes(params[:website])
        flash[:notice] = 'Website atualizado com sucesso.'
      end
    end

    respond_to do |format|
      if flash[:notice]
        format.html { redirect_to edit_website_path(@website) }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @website.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def guide
    @website = Website.find(params[:id])
    redirect_to agency_root_path if @website.agency != current_agency
    
    @agency = @website.agency
    @themes = @agency.subscription.themes
    @themes += @agency.themes
  end
  
  def guide_intro
    @website = Website.find(params[:id])
    redirect_to agency_root_path if @website.agency != current_agency
  end
  
  def guide_update
    @website = Website.find(params[:id])
    
    respond_to do |format|
      if @website.update_attributes(params[:website])
        format.js
      else
        format.js
      end
    end
  end
  
  def update_agency_about
    @agency = Agency.find(params[:id])
    
    respond_to do |format|
      if @agency.update_attributes(params[:agency])
        format.js
      else
        format.js
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

private

  def validate_agency
    # Clear the location of subdomain
    clear_location
    
    # First runs the Devise authenticator
    authenticate_agency!

    # Check if the agency is active
    check_active_agency

    # If agency is loged in validate if it has permission to access the controller
    unless current_agency.subscription.website_access?
      flash[:error] = 'O seu perfil de assinatura nao tem permissao p/ acessar a funcionalidade.'
      redirect_to agency_root_path
    end
  end

end