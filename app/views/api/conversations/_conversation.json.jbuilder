json.conversations do
  json.set! conversation.id do
    json.id conversation.id
    json.users_id conversation.users.pluck(:id)
    json.messages_id conversation.messages.pluck(:id)
  end
end

json.users do
  conversation.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.messages do
  conversation.messages.each do |message|
    json.set! message.id do
      json.partial! "api/messages/message", message: message
    end
  end
end
