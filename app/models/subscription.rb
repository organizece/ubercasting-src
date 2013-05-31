class Subscription < ActiveRecord::Base
  attr_accessible :casting_access, :casting_limit, :customer_access, :customer_limit, 
    :model_access, :model_limit, :name, :website_access

  has_many :agencies
  has_many :themes, as: :owner, dependent: :destroy
  has_many :subscription_plans
end
