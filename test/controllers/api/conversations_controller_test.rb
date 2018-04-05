require 'test_helper'

class Api::ConversationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_conversations_new_url
    assert_response :success
  end

  test "should get create" do
    get api_conversations_create_url
    assert_response :success
  end

  test "should get index" do
    get api_conversations_index_url
    assert_response :success
  end

  test "should get show" do
    get api_conversations_show_url
    assert_response :success
  end

end
