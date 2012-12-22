class CustomerCasting < ActiveRecord::Base
  attr_accessible :agency_id, :agency_customer_id, :name

  belongs_to :agency
  belongs_to :agency_customer
  has_many :model_customer_castings, dependent: :destroy
  has_many :customer_casting_messages, dependent: :destroy

  def self.search(name, agency_id, customer_id)
    castings = CustomerCasting.where(agency_id: agency_id)
    castings = castings.where(agency_customer_id: customer_id) if customer_id
    name = "%#{name}%"
    castings = castings.where("name like ? ", name) unless name.blank?

    castings
  end

end
