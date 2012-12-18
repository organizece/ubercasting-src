class AddAttachmentPhotoToAgencies < ActiveRecord::Migration
  def self.up
    change_table :agencies do |t|
      t.has_attached_file :photo
    end
  end

  def self.down
    drop_attached_file :agencies, :photo
  end
end
