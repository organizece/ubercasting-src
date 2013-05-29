class AgencyCustomerRequest < ActiveRecord::Base
  attr_accessible :agency_id, :company, :email, :message, :name, :phone, :new_request

  belongs_to :agency

  validates_presence_of :name, :email

  def self.search(name, agency_id, customer_id)
    requests = AgencyCustomerRequest.where(agency_id: agency_id)
    requests = requests.where(customer_id: customer_id) if customer_id
    name = "%#{name}%"
    requests = requests.where("lower(name) like ? ", name.downcase) unless name.blank?

    requests
  end

end
