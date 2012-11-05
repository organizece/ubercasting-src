require 'test_helper'

class MainPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get who_we_are" do
    get :who_we_are
    assert_response :success
  end

  test "should get tour" do
    get :tour
    assert_response :success
  end

  test "should get testemonials" do
    get :testemonials
    assert_response :success
  end

end
