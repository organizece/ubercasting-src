class SubdomainContactMailer < ActionMailer::Base
  default from: "contato@ubercasting.com.br"
  
  def contact_message(contact_name, contact_mail, contact_msg, contact_to)
    @contact_msg = contact_msg
    @contact_to = contact_to
    @contact_name = contact_name
    @contact_mail = contact_mail
    mail( :to => contact_to, :subject => "[UBER] - Contato Site - Nome: #{contact_name}" )
  end
  
end
