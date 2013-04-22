class AgencyCustomerMailer < ActionMailer::Base
  default from: "contato@ubercasting.com.br"

  def invite_customer(agency_customer)
    @website_url = root_url + "#{agency_customer.agency.website.subdomain}/home"
    @agency_name = agency_customer.agency.name

    mail to: agency_customer.email, subject: "[UBER] - #{@agency_name} - Convite"
  end
end
