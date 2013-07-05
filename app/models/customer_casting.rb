class CustomerCasting < ActiveRecord::Base
  attr_accessible :agency_id, :agency_customer_id, :name, :agency_new_message, :customer_new_message, :visualized

  belongs_to :agency
  belongs_to :agency_customer
  has_many :model_customer_castings, dependent: :destroy
  has_many :customer_casting_messages, dependent: :destroy

  validates :name, presence: true, length: { maximum: 30 }

  def self.search(name, agency_id, customer_id)
    castings = CustomerCasting.where(agency_id: agency_id)
    castings = castings.where(agency_customer_id: customer_id) if customer_id
    name = "%#{name}%"
    castings = castings.where("name like ? ", name) unless name.blank?

    castings
  end

  def owner?(customer)
    owns = false
    if customer
      agency_customer = AgencyCustomer.find_by_agency_id_and_customer_id(agency_id, customer.id)
      if agency_customer
        owns = (agency_customer_id == agency_customer.id)
      end
    end

    owns
  end

end
