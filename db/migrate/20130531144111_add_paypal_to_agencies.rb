class AddPaypalToAgencies < ActiveRecord::Migration
  def change
    add_column :agencies, :paypal_customer_token, :string
    add_column :agencies, :paypal_recurring_profile_token, :string
  end
end
