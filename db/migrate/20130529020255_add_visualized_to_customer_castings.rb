class AddVisualizedToCustomerCastings < ActiveRecord::Migration
  def change
    add_column :customer_castings, :visualized, :boolean, default: false
  end
end
