class AddCancellationWindowToAgencies < ActiveRecord::Migration
  def change
    add_column :agencies, :cancellation_window, :boolean, default: true
  end
end
