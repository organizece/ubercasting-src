class CreateThemes < ActiveRecord::Migration
  def change
    create_table :themes do |t|
      t.string :name
      t.integer :owner_id
      t.string :owner_type

      t.timestamps
    end
  end
end
