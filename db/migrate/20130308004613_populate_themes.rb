class PopulateThemes < ActiveRecord::Migration
  def up
    standard = Subscription.find_by_name(:standard)
    uber = Subscription.find_by_name(:uber)

    theme = Theme.new(name: :subdomain_default)
    theme.owner = standard
    theme.save!
    theme = Theme.new(name: :cubical_theme)
    theme.owner = standard
    theme.save!
    theme = Theme.new(name: :stylish_theme)
    theme.owner = standard
    theme.save!
    theme = Theme.new(name: :stripes_theme)
    theme.owner = standard
    theme.save!

    theme = Theme.new(name: :subdomain_default)
    theme.owner = uber
    theme.save!
    theme = Theme.new(name: :cubical_theme)
    theme.owner = uber
    theme.save!
    theme = Theme.new(name: :stylish_theme)
    theme.owner = uber
    theme.save!
    theme = Theme.new(name: :stripes_theme)
    theme.owner = uber
    theme.save!
  end

  def down
    Theme.all.each do |t|
      t.destroy!
    end
  end
end
