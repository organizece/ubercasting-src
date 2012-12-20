class Agency < ActiveRecord::Base

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me,
         :name, :cnpj, :owner_name, :owner_cpf
         
  has_many :models, dependent: :destroy
  has_many :castings, dependent: :destroy
  has_many :customer_castings, dependent: :destroy
  has_one  :website, dependent: :destroy

  has_many :customer_casting_messages, as: :sender
  has_many :customer_casting_messages, as: :receiver

end
