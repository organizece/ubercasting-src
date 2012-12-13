class BodyToTextTestimonial < ActiveRecord::Migration
  def up
    change_column :testimonials, :body, :text, :limit => 1000, :null => false
  end

  def down
    change_column :testimonials, :body, :string, :limit => 540, :null => false
  end
end
