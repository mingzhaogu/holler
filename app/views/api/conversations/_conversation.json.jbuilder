# json.extract! @conversation, :messages, :users;
#
# json.conversation do
  json.users conversation.users do |user|
    json.extract! user, :id, :username, :image_url, :name
  end
  json.messages conversation.messages
# end
