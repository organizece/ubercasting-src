class SubscriptionPlan < ActiveRecord::Base
  attr_accessible :months_qty, :price, :subscription_id

  belongs_to :subscription
end
