class AddHasCustomToWebsite < ActiveRecord::Migration
  def up
    add_column :websites, :has_custom, :boolean
  end
  def down
    remove_column :websites, :has_custom, :boolean
  end
end
