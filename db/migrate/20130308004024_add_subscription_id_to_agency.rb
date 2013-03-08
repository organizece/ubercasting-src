class AddSubscriptionIdToAgency < ActiveRecord::Migration
  def change
    add_column :agencies, :subscription_id, :integer
  end
end
