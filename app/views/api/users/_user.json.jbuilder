json.extract! user, :id, :username, :name
json.image_url asset_path(user.image.url)
json.conversationIds user.conversation_ids
