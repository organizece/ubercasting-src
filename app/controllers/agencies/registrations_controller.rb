class Agencies::RegistrationsController < Devise::RegistrationsController
  layout "main_page", :except => [:edit, :update]
  
  def update
  
    # required for settings form to submit when password is left blank
    if params[:agency][:password].blank?
      params[:agency].delete("password")
      params[:agency].delete("password_confirmation")
    end

    @agency = Agency.find(current_agency.id)

    if @agency.update_without_password(params[:agency])
      set_flash_message :notice, :updated
      # Sign in the user bypassing validation in case his password changed
      sign_in @agency, :bypass => true
      redirect_to after_update_path_for(@agency)
    else
      render "edit"
    end

  end
end