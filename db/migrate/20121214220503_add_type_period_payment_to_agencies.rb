class AddTypePeriodPaymentToAgencies < ActiveRecord::Migration
  def up
    add_column :agencies, :account_type, :string, :null => true
    add_column :agencies, :account_period, :string, :null => true
    add_column :agencies, :account_payment, :string, :null => true
  end
  
  def down
    remove_column :agencies, :account_type, :string, :null => true
    remove_column :agencies, :account_period, :string, :null => true
    remove_column :agencies, :account_payment, :string, :null => true
  end
end
