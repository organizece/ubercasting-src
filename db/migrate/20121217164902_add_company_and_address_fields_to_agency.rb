class AddCompanyAndAddressFieldsToAgency < ActiveRecord::Migration
  def up
    add_column :agencies, :agency_about, :text, :null => true
    add_column :agencies, :insc_state, :string, :null => true
    add_column :agencies, :insc_city, :string, :null => true
    add_column :agencies, :fancy_name, :string, :null => true
    add_column :agencies, :social_name, :string, :null => true
    add_column :agencies, :phone, :string, :null => true
    add_column :agencies, :fax, :string, :null => true
    add_column :agencies, :cep, :string, :null => true
    add_column :agencies, :address, :string, :null => true
    add_column :agencies, :address_number, :string, :null => true
    add_column :agencies, :neighborhood, :string, :null => true
    add_column :agencies, :complement, :string, :null => true
    add_column :agencies, :city, :string, :null => true
    add_column :agencies, :state, :string, :null => true
    add_column :agencies, :country, :string, :null => true
  end
  
  def down
    remove_column :agencies, :agency_about, :text, :null => true
    remove_column :agencies, :insc_state, :string, :null => true
    remove_column :agencies, :insc_city, :string, :null => true
    remove_column :agencies, :fancy_name, :string, :null => true
    remove_column :agencies, :social_name, :string, :null => true
    remove_column :agencies, :phone, :string, :null => true
    remove_column :agencies, :fax, :string, :null => true
    remove_column :agencies, :cep, :string, :null => true
    remove_column :agencies, :address, :string, :null => true
    remove_column :agencies, :address_number, :string, :null => true
    remove_column :agencies, :neighborhood, :string, :null => true
    remove_column :agencies, :complement, :string, :null => true
    remove_column :agencies, :city, :string, :null => true
    remove_column :agencies, :state, :string, :null => true
    remove_column :agencies, :country, :string, :null => true
  end
end
