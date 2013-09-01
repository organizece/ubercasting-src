class AddGalleryToWebsites < ActiveRecord::Migration
  def change
    add_column :websites, :gallery, :boolean, default: true
  end
end
