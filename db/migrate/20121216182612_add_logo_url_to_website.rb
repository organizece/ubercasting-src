class AddLogoUrlToWebsite < ActiveRecord::Migration
  def change
    add_column :websites, :logo_url, :string
  end
end
