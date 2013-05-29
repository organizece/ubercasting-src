class Casting < ActiveRecord::Base
  attr_accessible :name

  belongs_to :agency
  has_many :model_castings, dependent: :destroy
  has_many :models, through: :model_castings

  validates :name, presence: true

  scope :not_associated_with_model, lambda { |associated_castings|
    where('id not in (?)', associated_castings.map(&:casting_id)) if !associated_castings.empty? }

  def self.search(name, agency_id)
    castings = Casting.where(agency_id: agency_id)
    name = "%#{name}%"
    castings = castings.where("lower(name) like ? ", name.downcase) unless name.blank?

    castings
  end

  def create_limit_reached?
    limit = agency.subscription.casting_limit
    current_castings_number = agency.castings.count

    # Validates if the creation limit hasn't been reached. Unlimited(-1)
    limit != -1 && limit == current_castings_number
  end

end
