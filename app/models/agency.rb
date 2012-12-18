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
          :insc_state, :insc_city, :fancy_name, :social_name, :phone, :fax, :agency_about
         
  has_many :models
  has_many :castings
  has_one  :website

end
