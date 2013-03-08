class PopulateSubscriptions < ActiveRecord::Migration
  def up
    free = Subscription.new
    free.name = :free
    free.casting_access = false
    free.casting_limit = 0
    free.customer_access = false
    free.customer_limit = 0 
    free.model_access = true
    free.model_limit = 5
    free.website_access = false
    free.save!

    standard = Subscription.new #TODO
    standard.name = :standard
    standard.casting_access = true
    standard.casting_limit = 50
    standard.customer_access = true
    standard.customer_limit = -1 
    standard.model_access = true
    standard.model_limit = 50
    standard.website_access = true
    standard.save!

    uber = Subscription.new #TODO
    uber.name = :uber
    uber.casting_access = true
    uber.casting_limit = -1
    uber.customer_access = true
    uber.customer_limit = -1 
    uber.model_access = true
    uber.model_limit = -1
    uber.website_access = true
    uber.save!
  end

  def down
    Subscription.all.each do |s|
      s.destroy!
    end
  end
end
