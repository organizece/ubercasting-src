require 'test_helper'

class CompositesControllerTest < ActionController::TestCase
  setup do
    @composite = composites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:composites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create composite" do
    assert_difference('Composite.count') do
      post :create, composite: { first_sub_photo_id: @composite.first_sub_photo_id, fourth_sub_photo_id: @composite.fourth_sub_photo_id, main_photo_id: @composite.main_photo_id, model_id: @composite.model_id, second_sub_photo_id: @composite.second_sub_photo_id, third_sub_photo_id: @composite.third_sub_photo_id }
    end

    assert_redirected_to composite_path(assigns(:composite))
  end

  test "should show composite" do
    get :show, id: @composite
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @composite
    assert_response :success
  end

  test "should update composite" do
    put :update, id: @composite, composite: { first_sub_photo_id: @composite.first_sub_photo_id, fourth_sub_photo_id: @composite.fourth_sub_photo_id, main_photo_id: @composite.main_photo_id, model_id: @composite.model_id, second_sub_photo_id: @composite.second_sub_photo_id, third_sub_photo_id: @composite.third_sub_photo_id }
    assert_redirected_to composite_path(assigns(:composite))
  end

  test "should destroy composite" do
    assert_difference('Composite.count', -1) do
      delete :destroy, id: @composite
    end

    assert_redirected_to composites_path
  end
end
