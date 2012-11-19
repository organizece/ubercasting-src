class ModelCasting < ActiveRecord::Base
  attr_accessible :casting_id, :model_id, :score

  belongs_to :model
  belongs_to :casting

  validates :casting_id, presence: true
  validates :model_id, presence: true
end
