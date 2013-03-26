class CreateAgencyCustomerRequests < ActiveRecord::Migration
  def change
    create_table :agency_customer_requests do |t|
      t.integer :agency_id
      t.string :name
      t.string :email
      t.string :phone
      t.string :company
      t.text :message
      t.boolean :new_request, default: true

      t.timestamps
    end
  end
end
