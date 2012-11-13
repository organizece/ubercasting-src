class CreateCastings < ActiveRecord::Migration
  def change
    create_table :castings do |t|
      t.string :name
      t.integer :agency_id

      t.timestamps
    end
  end
end
