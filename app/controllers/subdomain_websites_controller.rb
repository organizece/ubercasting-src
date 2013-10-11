class SubdomainWebsitesController < ApplicationController
  layout :subdomain_layout

  before_filter :validate_customer

  def home
    @website = Website.find_by_subdomain(request.subdomain)
    @models = @website.agency.models.where(feature: true).order('feature_number ASC').limit(15)

    aux_models = @website.agency.models.where(feature: false).limit(15 - @models.size)
    aux_models.each do |aux_model|
      @models << aux_model
    end
  end

  def about
    @website = Website.find_by_subdomain(request.subdomain)

  end
  
  def casting_foreign
    @website = Website.find_by_subdomain(request.subdomain)

    # Change the default route to the current subdomain when customer log in
    store_custom_location(subdomain_castings_path(subdomain: request.subdomain))
  end

  def contact_us
    @website = Website.find_by_subdomain(request.subdomain)

  end
  
  def send_contact_us
    @website = Website.find_by_subdomain(request.subdomain)
    
    contact_msg = SubdomainContactMailer.contact_message(params[:contact_name], params[:contact_mail], 
      params[:contact_msg], @website.agency.email, '')
    contact_msg.deliver
    
    redirect_to subdomain_websites_contact_us_path, :notice => "Pedido enviado com sucesso!"
  end
  
  def be_model
    @website = Website.find_by_subdomain(request.subdomain)

  end
  
  def send_be_model
    @website = Website.find_by_subdomain(request.subdomain)
    
    contact_msg = SubdomainContactMailer.contact_message(params[:contact_name], params[:contact_mail], 
      params[:contact_msg], @website.agency.email, 'Novo Modelo')
    contact_msg.deliver
    
    redirect_to subdomain_websites_be_model_path, :notice => "Pedido enviado com sucesso!"
  end

private
  def subdomain_layout
    if request.subdomain && !request.subdomain.empty?
      website = Website.find_by_subdomain(request.subdomain)
      website.theme
    else
      'subdomain_default'
    end
  end

  def validate_customer
    # Only change the default route to the current subdomain when customer log in
    store_location(request.subdomain)
  end

  def use_https?
    false # Override in other controllers
  end

end