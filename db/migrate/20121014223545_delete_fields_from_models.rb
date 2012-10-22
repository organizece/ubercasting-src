class DeleteFieldsFromModels < ActiveRecord::Migration
  def up
    remove_column :models, :ethnicity
    remove_column :models, :sector
    remove_column :models, :job
    remove_column :models, :score
    remove_column :models, :age
  end

  def down
    add_column :models, :ethnicity, :string
    add_column :models, :sector, :string
    add_column :models, :job, :string
    add_column :models, :score, :integer
    add_column :models, :age, :integer
  end
end
