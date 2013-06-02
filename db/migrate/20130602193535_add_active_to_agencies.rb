class AddActiveToAgencies < ActiveRecord::Migration
  def change
    add_column :agencies, :active, :boolean, default: true
  end
end
