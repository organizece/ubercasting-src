class AddVideoToModel < ActiveRecord::Migration
  def up
    add_column :models, :video, :string
  end
  def down
    remove_column :models, :video, :string
  end
end
