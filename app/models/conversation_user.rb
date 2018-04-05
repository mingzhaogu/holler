class ConversationsUser < ApplicationRecord
  validates :conversation_id, :user_id, presence: true
  validates :conversation_id, uniqueness: { scope: :user_id }

  belongs_to :conversation
    # class_name: :Conversation,
    # primary_key: :id,
    # foreign_key: :conversation_id

  belongs_to :user
    # class_name: :User,
    # primary_key: :id,
    # foreign_key: :user_id
end
