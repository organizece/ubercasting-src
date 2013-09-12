class AgencyMailer < ActionMailer::Base
    default from: "contato@ubercasting.com.br"

    def warn_contract_expiration(agency)
        @agency_name = agency.name

        mail to: agency.email, subject: "[Uber] Vencimento do contrato"
    end

    def warn_contract_end(agency)
        @agency_name = agency.name

        mail to: agency.email, subject: "[Uber] Fim do contrato"
    end

    def warn_contract_renewal(agency)
        @agency_name = agency.name

        mail to: agency.email, subject: "[Uber] Renovacao do contrato"
    end
end