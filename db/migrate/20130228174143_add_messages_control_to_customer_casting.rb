class AddMessagesControlToCustomerCasting < ActiveRecord::Migration
  def change
    add_column :customer_castings, :agency_new_message, :boolean, default: false
    add_column :customer_castings, :customer_new_message, :boolean, default: false
  end
end
