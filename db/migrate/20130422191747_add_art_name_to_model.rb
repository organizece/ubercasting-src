class AddArtNameToModel < ActiveRecord::Migration
  def up
    add_column :models, :art_name, :string
  end
  def down
    remove_column :models, :art_name, :string
  end
end
