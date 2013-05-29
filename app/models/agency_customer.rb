class AgencyCustomer < ActiveRecord::Base
  attr_accessible :agency_id, :customer_id, :name, :email, :cnpj, :state_registration, 
    :municipal_registration, :trade_name, :corporate_name, :phone, :notes, :street, 
    :neighborhood, :complement, :cep, :city, :state, :country

  has_many :customer_castings, dependent: :destroy
  has_many :customer_casting_messages, as: :sender
  has_many :customer_casting_messages, as: :receiver
  belongs_to :agency
  belongs_to :customer

  validates_presence_of :name, :email
  validates_uniqueness_of :email, scope: :agency_id, case_sensitive: false

  def self.search(name, agency_id, customer_id)
    agency_customers = AgencyCustomer.where(agency_id: agency_id)
    agency_customers = agency_customers.where(customer_id: customer_id) if customer_id
    name = "%#{name}%"
    agency_customers = agency_customers.where("lower(name) like ? ", name.downcase) unless name.blank?

    agency_customers
  end

  def create_limit_reached?
    limit = agency.subscription.customer_limit
    current_customers_number = agency.agency_customers.count

    # Validates if the creation limit hasn't been reached. Unlimited(-1)
    limit != -1 && limit == current_customers_number
  end

end
