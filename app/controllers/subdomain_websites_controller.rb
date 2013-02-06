class SubdomainWebsitesController < ApplicationController
  layout :subdomain_layout

  def home
    @website = Website.find_by_subdomain(params[:subdomain])
    
  end

  def about
    @website = Website.find_by_subdomain(params[:subdomain])

  end
  
  def casting_foreign
    @website = Website.find_by_subdomain(params[:subdomain])

  end

  def contact_us
    @website = Website.find_by_subdomain(params[:subdomain])

  end
  
  def send_contact_us
    @website = Website.find_by_subdomain(params[:subdomain])
    
    contact_msg = SubdomainContactMailer.contact_message(params[:contact_name], params[:contact_mail], params[:contact_msg], params[:contact_email_to])
    contact_msg.deliver
    
    redirect_to subdomain_websites_contact_us_path, :notice => "E-mail enviado com sucesso!"
  end
  
  def be_model
    @website = Website.find_by_subdomain(params[:subdomain])

  end
  
  def send_be_model
    @website = Website.find_by_subdomain(params[:subdomain])
    
    contact_msg = SubdomainContactMailer.contact_message(params[:contact_name], params[:contact_mail], params[:contact_msg], params[:contact_email_to])
    contact_msg.deliver
    
    redirect_to subdomain_websites_be_model_path, :notice => "Pedido enviado com sucesso!"
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