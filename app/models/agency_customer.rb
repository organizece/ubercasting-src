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

  def self.search(name, agency_id, customer_id)
    agency_customers = AgencyCustomer.where(agency_id: agency_id)
    agency_customers = agency_customers.where(customer_id: customer_id) if customer_id
    name = "%#{name}%"
    agency_customers = agency_customers.where("name like ? ", name) unless name.blank?

    agency_customers
  end

end
