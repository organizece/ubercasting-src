class AgencyCustomerMailer < ActionMailer::Base
  default from: "contato@ubercasting.com.br"

  def invite_customer(agency_customer)
    @website_url = subdomain_websites_home_url(subdomain: agency_customer.agency.website.subdomain)
    @agency_name = agency_customer.agency.name

    mail to: agency_customer.email, subject: "#{@agency_name} - Envio de convite"
  end
end
