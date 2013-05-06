class CastingMailer < ActionMailer::Base
  default from: "contato@ubercasting.com.br"

  def share_casting(customer_casting)
    @casting_url = subdomain_casting_url(customer_casting, subdomain: customer_casting.agency.website.subdomain)
    @casting_name = customer_casting.name

    mail to: customer_casting.agency_customer.email, subject: "[UBER] - #{customer_casting.agency.name} - Compartilhar Casting"
  end

  def alert_new_message(casting, sender, receiver)
    @casting_name = casting.name
    @sender_name = sender.name
    @receiver_name = receiver.name

    @castings_url = subdomain_castings_url(subdomain: casting.agency.website.subdomain)
    @castings_url = customer_castings_url if receiver.class.name == 'Agency'

    mail to: receiver.email, subject: "[UBER] - Casting: #{casting.name} - Nova mensagem"
  end
end
