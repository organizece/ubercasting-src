class PaypalPayment
  def initialize(plan, agency)
    @plan = plan
    @agency = agency
  end
  
  def checkout_details
    process :checkout_details
  end
  
  def checkout_url(options)
    process(:checkout, options).checkout_url
  end
  
  def make_recurring
    process :create_recurring_profile, period: :monthly, frequency: billing_frequency, start_at: billing_date
  end

  def cancel_recurring
    process :cancel, profile_id: @agency.paypal_recurring_profile_token
  end
  
private

  def process(action, options = {})
    options = options.reverse_merge(
      token: @agency.paypal_payment_token,
      payer_id: @agency.paypal_customer_token,
      description: @plan.full_description,
      amount: @plan.price,
      currency: "USD"
    )
    response = PayPal::Recurring.new(options).send(action)
    raise response.errors.inspect if response.errors.present?
    response
  end

  def billing_date
    bill_date = Date.current.change(day: 5)
    bill_date = bill_date.next_month if bill_date.past?

    bill_date
  end

  def billing_frequency
    1
  end

end