json.conversation do
  json.partial! "api/conversations/conversation", conversation: @conversation
end
