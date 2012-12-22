class RenameCustomerIdFromCustomerCasting < ActiveRecord::Migration
  def up
    rename_column :customer_castings, :customer_id, :agency_customer_id
  end

  def down
    rename_column :customer_castings, :agency_customer_id, :customer_id
  end
end
