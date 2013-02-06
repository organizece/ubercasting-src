class Composite < ActiveRecord::Base
  belongs_to :model

  attr_accessible :first_sub_photo_id, :fourth_sub_photo_id, :main_photo_id, :model_id, :second_sub_photo_id, :third_sub_photo_id, :composite_style

  validates :main_photo_id, presence: true
  validates :first_sub_photo_id, presence: true
  validates :second_sub_photo_id, presence: true
  validates :third_sub_photo_id, presence: true
  validates :fourth_sub_photo_id, presence: true
  
end
