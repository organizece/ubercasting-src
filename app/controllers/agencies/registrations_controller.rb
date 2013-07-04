class Agencies::RegistrationsController < Devise::RegistrationsController
  layout "main_page", :except => [:edit, :update, :cancel_subscription]

  def new
    initialize_subscription_plans

    super
  end
  
  def edit
    initialize_agency_plan
    initialize_subscription_plans

    super
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

  def do_payment
    build_resource
    
    if resource.account_type == 'free'
      session[:registration_new_agency] = resource
      render 'confirm_paypal_payment'
    else
      plan = SubscriptionPlan.find(params[:plan_id])

      resource.plan_id = plan.id
      session[:registration_new_agency] = resource

      if resource.account_payment == 'PayPal'
        payment = PaypalPayment.new(plan, resource)
        redirect_to payment.checkout_url(
          return_url: agency_confirm_paypal_payment_url,
          cancel_url: root_url
        )
      elsif resource.account_payment == 'PagSeguro'
        flash[:notice] = 'Funcionalidade do pagseguro ainda sera implementada.'
        redirect_to root_path
      else
        flash[:error] = 'Opcao invalida de pagamento.'
        redirect_to root_path
      end
    end

  end

  def confirm_paypal_payment
    resource = session[:registration_new_agency]
    plan = SubscriptionPlan.find(resource.plan_id)

    resource.paypal_customer_token = params[:PayerID]
    resource.paypal_payment_token = params[:token]
    
    payment = PaypalPayment.new(plan, resource)
    response = payment.make_recurring
    resource.paypal_recurring_profile_token = response.profile_id

    # If not a monthly plan set the cancellation date
    if plan.months_qty != 1
      resource.subscription_cancellation_date = Date.current.months_since(plan.months_qty)
      resource.cancellation_window = false
    else
      resource.subscription_cancellation_date = nil
    end

    session[:registration_new_agency] = resource
  end

  def confirm_pagseguro_payment
    resource = session[:registration_new_agency]

    plan = SubscriptionPlan.find(resource.plan_id)
    flash[:notice] = 'Funcionalidade do pagseguro ainda sera implementada.'
    redirect_to root_path

    session[:registration_new_agency] = resource
  end

  def cancel_subscription
    @agency = current_agency
    if @agency.can_cancel?

      if @agency.account_payment == 'PayPal'
        cancel_paypal
      elsif @agency.account_payment == 'PagSeguro'
        cancel_pagseguro
      end

      @agency.active = false
      @agency.save!

      redirect_to destroy_agency_session_path
    else
      initialize_agency_plan
      initialize_subscription_plans

      flash[:error] = 'O seu periodo minimo de utilizacao do servico nao acabou.'
      render "edit"
    end
  end

  def change_subscription
    @agency = current_agency
    plan = SubscriptionPlan.find(params[:plan_id])

    # Depois arrumar p/ escolher o modo de pagamento da tela
    if @agency.account_type == 'free'
      @agency.account_payment = 'PayPal'
      @agency.save!
    end

    if @agency.account_payment == 'PayPal'
      @agency.paypal_customer_token = nil
      @agency.paypal_payment_token = nil

      payment = PaypalPayment.new(plan, @agency)
      redirect_to payment.checkout_url(
        return_url: agency_confirm_change_subscription_url(plan_id: plan.id),
        cancel_url: agency_root_url
      )
    elsif @agency.account_payment == 'PagSeguro'
      flash[:notice] = 'Funcionalidade do pagseguro ainda sera implementada.'
      redirect_to root_path
    else
      redirect_to agency_root_path
    end
  end

  def confirm_change_subscription
    @agency = current_agency
    plan = SubscriptionPlan.find(params[:plan_id])

    cancel_paypal

    @agency.paypal_customer_token = params[:PayerID]
    @agency.paypal_payment_token = params[:token]
    @agency.plan_id = plan.id
    
    payment = PaypalPayment.new(plan, @agency)
    response = payment.make_recurring
    @agency.paypal_recurring_profile_token = response.profile_id

    # If not a monthly plan set the cancellation date
    if plan.months_qty != 1
      @agency.subscription_cancellation_date = Date.current.months_since(plan.months_qty)
      @agency.cancellation_window = false
    else
      @agency.subscription_cancellation_date = nil
    end
    
    @agency.account_type = plan.subscription.name
    @agency.account_period = plan.period
    
    @agency.save!
    flash[:notice] = 'Alteracao no plano realizada com sucesso!'
    redirect_to agency_root_path
  end
  
protected
  
  def after_sign_up_path_for(resource)
      "/my/agencies/sign_in"
  end
  
  def after_inactive_sign_up_path_for(resource)
      "/my/agencies/sign_in"
  end

private

  def cancel_paypal
    if current_agency.plan_id
      plan = SubscriptionPlan.find(@agency.plan_id)
      payment = PaypalPayment.new(plan, @agency)
      payment.cancel_recurring
    end
  end

  def cancel_pagseguro

  end
  
  def initialize_subscription_plans
    @monthly = SubscriptionPlan.where(months_qty: 1)
    @semiannual = SubscriptionPlan.where(months_qty: 6)
    @annual = SubscriptionPlan.where(months_qty: 12)
  end

  def initialize_agency_plan
    @plan = SubscriptionPlan.find(current_agency.plan_id) if current_agency.plan_id
  end
  
end