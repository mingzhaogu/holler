# json.partial! "api/users/user", user: @user
json.set! @user.id do
  json.extract! @user, :id, :username
  json.conversationIds @user.conversation_ids
end
