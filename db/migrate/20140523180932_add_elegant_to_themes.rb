class AddElegantToThemes < ActiveRecord::Migration
  def change
    theme = Theme.create :name => "elegant_theme", :owner_id => "3", :owner_type => "Subscription"
    theme.save!
  end
end
