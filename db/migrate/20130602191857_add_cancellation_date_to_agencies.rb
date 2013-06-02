class AddCancellationDateToAgencies < ActiveRecord::Migration
  def change
    add_column :agencies, :subscription_cancellation_date, :date
  end
end
