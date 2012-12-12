class AddNotNullToTestimonial < ActiveRecord::Migration
  def change
    change_column :testimonials, :from, :string, :null => false
    change_column :testimonials, :title, :string, :null => false
    change_column :testimonials, :body, :string, :null => false
  end
end
