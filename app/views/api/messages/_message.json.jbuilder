json.extract! message, :id, :sender_id, :conversation_id, :body, :message_type
json.set! :timestamp, message.created_at.localtime.strftime("%^b %-d, %-l:%M%p")
