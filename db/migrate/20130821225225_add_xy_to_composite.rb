class AddXyToComposite < ActiveRecord::Migration
  def change
  	add_column :composites, :main_photo_x, :integer
  	add_column :composites, :main_photo_y, :integer
  	add_column :composites, :first_sub_photo_x, :integer
  	add_column :composites, :first_sub_photo_y, :integer
  	add_column :composites, :second_sub_photo_x, :integer
  	add_column :composites, :second_sub_photo_y, :integer
  	add_column :composites, :third_sub_photo_x, :integer
  	add_column :composites, :third_sub_photo_y, :integer
  	add_column :composites, :fourth_sub_photo_x, :integer
  	add_column :composites, :fourth_sub_photo_y, :integer
  end
end
