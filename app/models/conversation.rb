class Conversation < ApplicationRecord

  has_many :messages, -> { order(created_at: :asc) }
  has_many :conversation_users, inverse_of: :conversation
  has_many :users,
    through: :conversation_users

  def last_message
    messages.last
  end

end
