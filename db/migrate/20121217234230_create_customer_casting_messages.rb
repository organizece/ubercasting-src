class CreateCustomerCastingMessages < ActiveRecord::Migration
  def change
    create_table :customer_casting_messages do |t|
      t.integer :sender_id
      t.string :sender_type
      t.integer :receiver_id
      t.string :receiver_type
      t.text :content
      t.boolean :read
      t.integer :customer_casting_id

      t.timestamps
    end
  end
end
