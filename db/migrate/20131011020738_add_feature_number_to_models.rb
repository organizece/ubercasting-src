class AddFeatureNumberToModels < ActiveRecord::Migration
  def change
    add_column :models, :feature_number, :integer, default: 0
  end
end
