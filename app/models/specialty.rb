class Specialty < ActiveRecord::Base
  attr_accessible :name

  has_and_belongs_to_many :models

  def translated_name
    I18n.t(self.name, scope: :specialties)
  end
end
