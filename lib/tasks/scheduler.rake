task update_agency_cancellation_date: :environment do
  puts "[update_agency_cancellation_date] Starting..."

  Agency.scheduler_update_cancellation_date

  puts "[update_agency_cancellation_date] Ended."
end