class CreateSubscriptionPlans < ActiveRecord::Migration
  def change
    create_table :subscription_plans do |t|
      t.integer :subscription_id
      t.integer :months_qty
      t.decimal :price

      t.timestamps
    end
  end
end
