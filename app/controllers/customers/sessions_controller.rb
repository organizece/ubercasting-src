class Customers::SessionsController < Devise::SessionsController
  layout "customer_login"

private

  def use_https?
    false # Override in other controllers
  end
  
end