class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.string :from, :limit => 60
      t.string :title, :limit => 140
      t.string :body, :limit => 540

      t.timestamps
    end
  end
end
