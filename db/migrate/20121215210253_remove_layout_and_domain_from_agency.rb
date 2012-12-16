class RemoveLayoutAndDomainFromAgency < ActiveRecord::Migration
  def up
    remove_column :agencies, :layout
    remove_column :agencies, :domain
  end

  def down
    add_column :agencies, :domain, :string
    add_column :agencies, :layout, :string
  end
end
