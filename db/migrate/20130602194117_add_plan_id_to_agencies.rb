class AddPlanIdToAgencies < ActiveRecord::Migration
  def change
    add_column :agencies, :plan_id, :integer
  end
end
