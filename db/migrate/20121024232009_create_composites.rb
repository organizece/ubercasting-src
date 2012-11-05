class CreateComposites < ActiveRecord::Migration
  def change
    create_table :composites do |t|
      t.integer :model_id
      t.integer :main_photo_id
      t.integer :first_sub_photo_id
      t.integer :second_sub_photo_id
      t.integer :third_sub_photo_id
      t.integer :fourth_sub_photo_id

      t.timestamps
    end
  end
end
