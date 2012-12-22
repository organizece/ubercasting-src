class AddExternalSiteToWebsites < ActiveRecord::Migration
  def up
    add_column :websites, :external_site, :string
  end
  
  def down
    remove_column :websites, :external_site, :string
  end
end
