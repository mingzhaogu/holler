class ConversationUser < ApplicationRecord
  validates :user_id, :conversation_id, presence: true
  validates :conversation_id, uniqueness: { scope: :user }

  belongs_to :conversation
  belongs_to :user

end
