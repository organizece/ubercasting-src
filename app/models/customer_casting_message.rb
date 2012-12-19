class CustomerCastingMessage < ActiveRecord::Base
  attr_accessible :content, :customer_casting_id, :read, :receiver_id, :receiver_type, :sender_id, :sender_type

  belongs_to :customer_casting
  belongs_to :sender, polymorphic: true
  belongs_to :receiver, polymorphic: true

end
