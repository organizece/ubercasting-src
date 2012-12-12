class Testimonial < ActiveRecord::Base
  attr_accessible :body, :from, :title
  
  validates :from, :presence => {:message => "Informe o autor"}
  validates :title, :presence => {:message => "Informe o titulo"}
  validates :body, :presence => {:message => "Informe o depoimento"}
end
