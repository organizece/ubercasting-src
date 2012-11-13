class AddMannequinToModels < ActiveRecord::Migration
  def change
    add_column :models, :mannequin, :integer
  end
end
