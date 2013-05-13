class AddCropToModels < ActiveRecord::Migration
  def change
    add_column :models, :crop_x, :integer
    add_column :models, :crop_y, :integer
    add_column :models, :crop_h, :integer
    add_column :models, :crop_w, :integer
  end
end