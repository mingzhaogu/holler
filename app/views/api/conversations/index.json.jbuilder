json.conversations do
  @conversations.each do |conv|
    json.partial! "api/conversations/conversation", conversation: conv
  end
end

json.users do
  @conversations.collect(&:users).flatten.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.messages do
  @conversations.collect(&:messages).flatten.each do |message|
    json.set! message.id do
      json.partial! "api/messages/message", message: message
    end
  end
end
