class CastingMailer < ActionMailer::Base
  default from: "contato@ubercasting.com.br"

  def share_casting(customer_casting)
    @casting_url = root_url + "#{customer_casting.agency.website.subdomain}/castings/#{customer_casting.id}"
    @casting_name = customer_casting.name

    mail to: customer_casting.agency_customer.email, subject: "[UBER] - #{customer_casting.agency.name} - Compartilhar Casting"
  end
end
