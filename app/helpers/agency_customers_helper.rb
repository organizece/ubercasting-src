module AgencyCustomersHelper

  def agency_customer_order_columns
    columns = []
    columns << [Customer.human_attribute_name(:email), 'email;asc']
    columns << [Customer.human_attribute_name(:name), 'name;asc']

    columns
  end

end