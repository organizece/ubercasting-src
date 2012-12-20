class CreateModelCustomerCastings < ActiveRecord::Migration
  def change
    create_table :model_customer_castings do |t|
      t.integer :customer_casting_id
      t.integer :model_id
      t.integer :score

      t.timestamps
    end
  end
end
