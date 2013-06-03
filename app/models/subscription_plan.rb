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

  def full_description
    subscription.name.capitalize + ' - ' + period_description
  end

private

  def period_description
    if months_qty == 1
      "Mensal"
    elsif months_qty == 6
      "Semestral"
    else
      "Anual"
    end
  end
  
end
