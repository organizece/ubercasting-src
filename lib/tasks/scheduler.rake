task update_agency_cancellation_date: :environment do
  puts "[update_agency_cancellation_date] Starting..."

  Agency.scheduler_update_cancellation_date

  puts "[update_agency_cancellation_date] Ended."
end

task scheduler_warn_contract_expiration: :environment do
  puts "[scheduler_warn_contract_expiration] Starting..."

  Agency.scheduler_warn_contract_expiration

  puts "[scheduler_warn_contract_expiration] Ended."
end