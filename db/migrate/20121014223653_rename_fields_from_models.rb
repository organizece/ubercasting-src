class RenameFieldsFromModels < ActiveRecord::Migration
  def up
    rename_column :models, :home_phone, :secondary_phone
    rename_column :models, :cel_phone, :personal_phone
    rename_column :models, :shoes, :shoes_size
    rename_column :models, :other_email, :secondary_email
    rename_column :models, :responsible, :responsible_name
  end

  def down
    rename_column :models, :secondary_phone, :home_phone
    rename_column :models, :personal_phone, :cel_phone
    rename_column :models, :shoes_size, :shoes
    rename_column :models, :secondary_email, :other_email
    rename_column :models, :responsible_name, :responsible
  end
end
