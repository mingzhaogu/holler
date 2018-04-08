json.set! conversation.id do
  json.id conversation.id
  json.chat_name conversation.chat_name
  json.users_id conversation.users.pluck(:id)
  json.messages_id conversation.messages.pluck(:id)
end
