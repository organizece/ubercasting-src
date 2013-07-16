class AddFinalPrice < ActiveRecord::Migration
  def up
    # Standard plans
    standardPlanMonth = SubscriptionPlan.find(1)
    standardPlanMonth.price = 300
    standardPlanMonth.save!
    
    standardPlanSemi = SubscriptionPlan.find(2)
    standardPlanSemi.price = 275
    standardPlanSemi.save!
    
    standardPlanAnnual = SubscriptionPlan.find(3)
    standardPlanAnnual.price = 262.5
    standardPlanAnnual.save!
    
    # Uber plans
    uberPlanMonth = SubscriptionPlan.find(4)
    uberPlanMonth.price = 390
    uberPlanMonth.save!
    
    uberPlanSemi = SubscriptionPlan.find(5)
    uberPlanSemi.price = 357.5
    uberPlanSemi.save!
    
    uberPlanAnnual = SubscriptionPlan.find(6)
    uberPlanAnnual.price = 341.25
    uberPlanAnnual.save!
  end

  def down
    # Standard plans
    standardPlanMonth = SubscriptionPlan.find(1)
    standardPlanMonth.price = 5
    standardPlanMonth.save!
    
    standardPlanSemi = SubscriptionPlan.find(2)
    standardPlanSemi.price = 10
    standardPlanSemi.save!
    
    standardPlanAnnual = SubscriptionPlan.find(3)
    standardPlanAnnual.price = 15
    standardPlanAnnual.save!
    
    # Uber plans
    uberPlanMonth = SubscriptionPlan.find(4)
    uberPlanMonth.price = 15
    uberPlanMonth.save!
    
    uberPlanSemi = SubscriptionPlan.find(5)
    uberPlanSemi.price = 20
    uberPlanSemi.save!
    
    uberPlanAnnual = SubscriptionPlan.find(6)
    uberPlanAnnual.price = 25
    uberPlanAnnual.save!
  end
end
