class CreateCustomerCastings < ActiveRecord::Migration
  def change
    create_table :customer_castings do |t|
      t.string :name
      t.integer :agency_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
