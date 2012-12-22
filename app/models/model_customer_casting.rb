class ModelCustomerCasting < ActiveRecord::Base
  attr_accessible :customer_casting_id, :model_id, :score

  belongs_to :customer_casting
  belongs_to :model
  
end
