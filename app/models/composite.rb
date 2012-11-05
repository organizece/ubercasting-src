class Composite < ActiveRecord::Base
  belongs_to :model

  attr_accessible :first_sub_photo_id, :fourth_sub_photo_id, :main_photo_id, :model_id, :second_sub_photo_id, :third_sub_photo_id
end
