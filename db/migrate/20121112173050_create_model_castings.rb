class CreateModelCastings < ActiveRecord::Migration
  def change
    create_table :model_castings do |t|
      t.integer :model_id
      t.integer :casting_id
      t.integer :score

      t.timestamps
    end
  end
end
