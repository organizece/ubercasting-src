class Customers::PasswordsController < Devise::PasswordsController
  layout "customer_login"
  
  def after_resetting_password_path_for(resource)
    subdomain = resource.agencies.first.website.subdomain
    session[:users_return_to] = subdomain_websites_home_url(subdomain: subdomain)
    
    after_sign_in_path_for(resource)
  end

private

  def use_https?
    false # Override in other controllers
  end
  
end