json.message do
  json.partial! "api/messages/message", message: message
end

json.message_ids message.conversation.message_ids
