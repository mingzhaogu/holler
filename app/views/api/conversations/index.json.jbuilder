json.conversations do
  @conversations.each do |conv|
    json.set! conv.id do
      # json.extract! conv, :id, :users
      json.partial! "api/conversations/conversation", conversation: conv
      json.last_message conv.last_message
    end
  end
end
