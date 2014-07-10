class AddUberToThemes < ActiveRecord::Migration
  def change
    theme = Theme.create :name => "uber_theme", :owner_id => "3", :owner_type => "Subscription"
    theme.save!
  end
end
