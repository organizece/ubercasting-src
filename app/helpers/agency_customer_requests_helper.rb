module AgencyCustomerRequestsHelper

  def agency_customer_request_order_columns
    columns = []
    columns << [AgencyCustomerRequest.human_attribute_name(:email), 'email;asc']
    columns << [AgencyCustomerRequest.human_attribute_name(:name), 'name;asc']

    columns
  end

end
