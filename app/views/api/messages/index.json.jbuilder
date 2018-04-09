json.messages(Message.limit(15).order("created_at DESC").load.reverse)
  json.partial! 'api/messages/message', message: message
end
