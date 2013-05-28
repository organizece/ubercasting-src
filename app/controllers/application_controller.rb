class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :https_redirect

  def store_location(subdomain)
    session[:users_return_to] = subdomain_websites_home_path(subdomain: subdomain)
  end

  def clear_location
    session[:users_return_to] = agency_root_path
  end
  
  def do_something_awesome
    session[:users_return_to] = admin_root_path
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

private

  def https_redirect
    if ENV["ENABLE_HTTPS"] == "yes"
      if request.ssl? && !use_https? || !request.ssl? && use_https?
        protocol = request.ssl? ? "http" : "https"
        flash.keep
        redirect_to protocol: "#{protocol}://", status: :moved_permanently
      end
    end
  end

  def use_https?
    true # Override in other controllers
  end

end
