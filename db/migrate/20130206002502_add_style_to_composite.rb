class AddStyleToComposite < ActiveRecord::Migration
  def up
    add_column :composites, :composite_style, :string
  end
  def down
    remove_column :composites, :composite_style, :string
  end
end
