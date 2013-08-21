class Composite < ActiveRecord::Base
  belongs_to :model

  attr_accessible :first_sub_photo_id, :fourth_sub_photo_id, :main_photo_id, :model_id, :second_sub_photo_id, 
  		:third_sub_photo_id, :composite_style, :main_photo_x, :main_photo_y, :first_sub_photo_x,
  		:first_sub_photo_y, :second_sub_photo_x, :second_sub_photo_y, :third_sub_photo_x, :third_sub_photo_y,
  		:fourth_sub_photo_x, :fourth_sub_photo_y

  validates :main_photo_id, presence: true
  validates :first_sub_photo_id, presence: true
  validates :second_sub_photo_id, presence: true
  validates :third_sub_photo_id, presence: true
  validates :fourth_sub_photo_id, presence: true
  
end
