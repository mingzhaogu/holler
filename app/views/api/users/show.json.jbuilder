json.set! @user.id do
  json.partial! "api/users/user", user: @user
  # json.extract! @user, :id, :username
  # json.conversationIds @user.conversation_ids
end
