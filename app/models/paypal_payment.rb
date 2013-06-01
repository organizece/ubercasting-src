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
    process :create_recurring_profile, period: :monthly, frequency: @plan.months_qty, start_at: Time.zone.now
  end
  
private

  def process(action, options = {})
    options = options.reverse_merge(
      token: @agency.paypal_payment_token,
      payer_id: @agency.paypal_customer_token,
      description: @plan.subscription.name,
      amount: @plan.price,
      currency: "USD"
    )
    response = PayPal::Recurring.new(options).send(action)
    raise response.errors.inspect if response.errors.present?
    response
  end
end