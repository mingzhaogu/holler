# json.messages(Message.limit(15).order("created_at DESC").load.reverse) do
json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
