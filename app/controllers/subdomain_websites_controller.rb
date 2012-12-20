class SubdomainWebsitesController < ApplicationController
  layout :subdomain_layout

  def home
    @website = Website.find_by_subdomain(params[:subdomain])
    
  end

  def about
    @website = Website.find_by_subdomain(params[:subdomain])

  end

  def contact_us
    @website = Website.find_by_subdomain(params[:subdomain])

  end
  
  def be_model
    @website = Website.find_by_subdomain(params[:subdomain])

  end

private
  def subdomain_layout
    if params[:subdomain] && !params[:subdomain].empty?
      website = Website.find_by_subdomain(params[:subdomain])
      website.theme
    else
      'subdomain_default'
    end
  end

end