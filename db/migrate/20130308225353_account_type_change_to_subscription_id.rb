class AccountTypeChangeToSubscriptionId < ActiveRecord::Migration
  def up
    default_subscription = Subscription.find_by_name(:uber)
    Agency.all.each do |agency|
      subscription = Subscription.find_by_name(agency.account_type) if !agency.account_type.blank?
      agency.subscription = subscription ? subscription : default_subscription
      agency.save!
    end
  end

  def down
    Agency.all.each do |agency|
      agency.subscription = nil
      agency.save!
    end
  end
end
