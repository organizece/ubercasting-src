class AddLayoutToAgency < ActiveRecord::Migration
  def change
    add_column :agencies, :layout, :string, default: 'subdomain_default'
  end
end
