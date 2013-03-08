class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.boolean :model_access
      t.integer :model_limit
      t.boolean :casting_access
      t.integer :casting_limit
      t.boolean :customer_access
      t.integer :customer_limit
      t.boolean :website_access

      t.timestamps
    end
  end
end
