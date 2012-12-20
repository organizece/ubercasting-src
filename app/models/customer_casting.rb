class CustomerCasting < ActiveRecord::Base
  attr_accessible :agency_id, :customer_id, :name

  belongs_to :agency
  belongs_to :customer
  has_many :model_customer_castings, dependent: :destroy
  has_many :customer_casting_messages, dependent: :destroy

  def self.search(name, agency_id, customer_id)
    castings = CustomerCasting.where(agency_id: agency_id)
    castings = castings.where(customer_id: customer_id)
    name = "%#{name}%"
    castings = castings.where("name like ? ", name) unless name.blank?

    castings
  end

end
