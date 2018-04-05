json.extract! message,
  :id,
  :sender_id,
  :conversation_id,
  :body,
  :message_type,
  :created_at
json.sender_name message.user.username
