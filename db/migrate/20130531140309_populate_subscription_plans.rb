class PopulateSubscriptionPlans < ActiveRecord::Migration
  def up
    # Standard plans
    standard = Subscription.find_by_name(:standard)
    plan_1s = SubscriptionPlan.new
    plan_1s.subscription = standard
    plan_1s.months_qty = 1
    plan_1s.price = 1.5
    plan_1s.save!

    plan_6s = SubscriptionPlan.new
    plan_6s.subscription = standard
    plan_6s.months_qty = 6
    plan_6s.price = 8.5
    plan_6s.save!

    plan_12s = SubscriptionPlan.new
    plan_12s.subscription = standard
    plan_12s.months_qty = 12
    plan_12s.price = 16
    plan_12s.save!

    # Uber plans
    uber = Subscription.find_by_name(:uber)
    plan_1u = SubscriptionPlan.new
    plan_1u.subscription = uber
    plan_1u.months_qty = 1
    plan_1u.price = 3
    plan_1u.save!

    plan_6u = SubscriptionPlan.new
    plan_6u.subscription = uber
    plan_6u.months_qty = 6
    plan_6u.price = 17
    plan_6u.save!

    plan_12u = SubscriptionPlan.new
    plan_12u.subscription = uber
    plan_12u.months_qty = 12
    plan_12u.price = 32
    plan_12u.save!
  end

  def down
    SubscriptionPlan.all.each do |plan|
      plan.destroy!
    end
  end
end
