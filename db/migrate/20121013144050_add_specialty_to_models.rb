class AddSpecialtyToModels < ActiveRecord::Migration
  def change
    add_column :models, :specialty, :string
  end
end
