class CreateAgencyCustomers < ActiveRecord::Migration
  def change
    create_table :agency_customers do |t|
      t.string :name
      t.string :cnpj
      t.string :state_registration
      t.string :municipal_registration
      t.string :trade_name
      t.string :corporate_name
      t.string :phone
      t.string :street
      t.string :neighborhood
      t.string :complement
      t.string :cep
      t.string :city
      t.string :state
      t.string :country
      t.text :notes

      t.integer :agency_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
