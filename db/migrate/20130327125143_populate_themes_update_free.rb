class PopulateThemesUpdateFree < ActiveRecord::Migration
  def up
    free = Subscription.find_by_name(:free)
    
    theme = Theme.new(name: :subdomain_default)
    theme.owner = free
    theme.save!
  end

  def down
    Theme.all.each do |t|
      t.destroy!
    end
  end
end
