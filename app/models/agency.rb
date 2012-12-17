class Agency < ActiveRecord::Base

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me,
         :name, :cnpj, :owner_name, :owner_cpf
         
  has_many :models
  has_many :castings
  has_one  :website

end
