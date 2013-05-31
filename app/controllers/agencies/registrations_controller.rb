class Agencies::RegistrationsController < Devise::RegistrationsController
  layout "main_page", :except => [:edit, :update]

  def new
    @monthly = SubscriptionPlan.where(months_qty: 1)
    @semiannual = SubscriptionPlan.where(months_qty: 6)
    @annual = SubscriptionPlan.where(months_qty: 12)

    super
  end

  def do_payment
    build_resource
    session[:registration_new_agency] = resource

    redirect_to "http://www.google.com"
    # fazer pagamento
  end

  def confirm_payment
    resource = session[:registration_new_agency]

    # fazer recorrente

    session[:registration_new_agency] = resource
  end
  
  def create
    resource = session[:registration_new_agency]

    # Clean session key
    session[:registration_new_agency] = nil

    subscription = Subscription.find_by_name(resource.account_type)
    resource.subscription = subscription

    if resource.save

      website = Website.new
      website.agency = resource
      website.save!
      
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_up(resource_name, resource)
        respond_with resource, :location => after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_navigational_format?
        expire_session_data_after_sign_in!
        respond_with resource, :location => after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      respond_with resource
    end
    
  end
  
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
  
  protected
  
  def after_sign_up_path_for(resource)
      "/my/agencies/sign_in"
  end
  
  def after_inactive_sign_up_path_for(resource)
      "/my/agencies/sign_in"
  end
  
end