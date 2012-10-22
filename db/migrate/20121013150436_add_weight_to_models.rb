class AddWeightToModels < ActiveRecord::Migration
  def change
    add_column :models, :weight, :decimal
  end
end
