class Agency < ActiveRecord::Base

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me,
         :name, :cnpj, :owner_name, :owner_cpf, :domain

  has_many :models

  validates :domain, presence: true, if: :confirmed?

  def confirmed?
    confirmed_at != nil
  end

end
