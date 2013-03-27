class UpdateFreeSubscription < ActiveRecord::Migration
  def up
    free = Subscription.find_by_name(:free)
    free.casting_access = true
    free.casting_limit = 5
    free.customer_access = true
    free.customer_limit = 05
    free.model_access = true
    free.model_limit = 5
    free.website_access = true
    free.save!
  end

  def down
    free = Subscription.find_by_name(:free)
    free.casting_access = false
    free.casting_limit = 0
    free.customer_access = false
    free.customer_limit = 0 
    free.model_access = true
    free.model_limit = 5
    free.website_access = false
    free.save!
  end
end
