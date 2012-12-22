class Customer < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me

  has_many :customer_castings, dependent: :destroy
  has_many :customer_casting_messages, as: :sender
  has_many :customer_casting_messages, as: :receiver
  has_many :agency_customers, dependent: :destroy
  has_many :agencies, through: :agency_customers

end
