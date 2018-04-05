class Conversation < ApplicationRecord

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :conversation_id

  has_many :conversations_users,
    class_name: :ConversationUser,
    primary_key: :id,
    foreign_key: :conversation_id

  has_many :users, through: :conversations_users
end
