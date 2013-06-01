class Agency < ActiveRecord::Base

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable
         
  has_attached_file :photo, :styles => { :profile => "128x128>" },
                    :url  => "/assets/agencies/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/agencies/:id/:style/:basename.:extension"

  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
  
  attr_accessible :email, :password, :password_confirmation, :remember_me, :photo,
          :name, :cnpj, :owner_name, :owner_cpf, :domain, :account_type, :account_period, :account_payment,
          :address, :address_number, :neighborhood, :complement, :cep, :city, :state, :country, :agency_about,
          :insc_state, :insc_city, :fancy_name, :social_name, :phone, :fax, :agency_about, :subscription_id,
          :latitude, :longitude, :paypal_customer_token, :paypal_recurring_profile_token
  attr_accessor :paypal_payment_token

  geocoded_by :full_address
  after_validation :geocode, :if => :full_address_changed?
         
  has_many :models, dependent: :destroy
  has_many :castings, dependent: :destroy
  has_many :customer_castings, dependent: :destroy
  has_one  :website, dependent: :destroy
  has_many :agency_customers, dependent: :destroy
  has_many :agency_customer_requests, dependent: :destroy
  has_many :customers, through: :agency_customers

  has_many :customer_casting_messages, as: :sender
  has_many :customer_casting_messages, as: :receiver
  
  has_many :themes, as: :owner, dependent: :destroy
  belongs_to :subscription

  def full_address
    "#{address} #{address_number} #{cep} #{city} #{state} #{country}"
  end

  def full_address_changed?
    address_changed? || address_number_changed? || cep_changed? || city_changed? || state_changed? || country_changed?
  end

end