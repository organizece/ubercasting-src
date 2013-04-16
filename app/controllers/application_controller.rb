class ApplicationController < ActionController::Base
  protect_from_forgery

  def store_location(subdomain)
    session[:users_return_to] = subdomain_websites_home_path(subdomain)
  end

  def clear_location
    session[:users_return_to] = agency_root_path
  end

  def stored_location_for(resource_or_scope)
    session[:users_return_to] || super
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def after_sign_out_path_for(resource)
    stored_location_for(resource) || root_path
  end

end
