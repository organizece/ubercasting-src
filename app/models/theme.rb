class Theme < ActiveRecord::Base
  attr_accessible :name, :owner_id, :owner_type

  belongs_to :owner, polymorphic: true

  def translated_name
    I18n.t(self.name, scope: :themes)
  end
end
