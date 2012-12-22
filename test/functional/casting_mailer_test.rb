require 'test_helper'

class CastingMailerTest < ActionMailer::TestCase
  test "share_casting" do
    mail = CastingMailer.share_casting
    assert_equal "Share casting", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
