class CreateGalleryItems < ActiveRecord::Migration
  def change
    create_table :gallery_items do |t|
      t.string :title
      t.string :description
      t.integer :agency_id
      t.has_attached_file :image

      t.timestamps
    end
  end
end
