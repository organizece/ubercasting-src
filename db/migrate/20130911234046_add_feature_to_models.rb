class AddFeatureToModels < ActiveRecord::Migration
  def change
    add_column :models, :feature, :boolean, default: false
  end
end
