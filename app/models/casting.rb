class Casting < ActiveRecord::Base
  attr_accessible :name

  belongs_to :agency
  has_many :model_castings
  has_many :models, through: :model_castings

  validates :name, presence: true

  def self.search(name, agency_id)
    castings = Casting.where(agency_id: agency_id)
    name = "%#{name}%"
    castings = castings.where("name like ? ", name) unless name.blank?

    castings
  end

end
