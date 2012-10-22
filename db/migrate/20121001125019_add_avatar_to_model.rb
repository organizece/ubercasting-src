class AddAvatarToModel < ActiveRecord::Migration
  def change
  	add_column :models, :avatar_photo_id, :integer
  end
end
