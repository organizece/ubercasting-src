class SubscriptionPlan < ActiveRecord::Base
  attr_accessible :months_qty, :price, :subscription_id

  belongs_to :subscription
  
  def period
    if months_qty == 1
      "monthly"
    elsif months_qty == 6
      "semiannual"
    else
      "annual"
    end
  end
  
end
