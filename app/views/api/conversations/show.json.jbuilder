json.conversation do
  json.partial! "api/conversations/conversation", conversation: @conversation
end

json.users do
  @conversation.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! "api/messages/message", message: message
    end
  end
end
