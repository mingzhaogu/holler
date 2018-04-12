# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  chat_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conversation < ApplicationRecord
  # validates :messages, length: { minimum: 1 }
  # scope :by_last_message, -> { sort { |c1, c2| c2.last_message_timestamp <=> c1.last_message_timestamp  } }
  has_many :messages, -> { order(created_at: :asc) }, inverse_of: :conversation
  has_many :conversation_users, inverse_of: :conversation
  has_many :users,
    through: :conversation_users

  before_validation :set_default_name

  # def self.sort_by_last_message
  #   to_a.sort { |c1, c2| c2.last_message_timestamp <=> c1.last_message_timestamp  }
  # end

  def last_message
    messages.last
  end

  def last_message_timestamp
    last_message.nil? ? Time.now : last_message.created_at
  end

  def set_default_name
    self.chat_name ||= SecureRandom.hex(8)
  end
end
