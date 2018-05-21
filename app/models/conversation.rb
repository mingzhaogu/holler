# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  chat_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class Conversation < ApplicationRecord
  has_many :messages, -> { order(created_at: :asc) }, inverse_of: :conversation
  has_many :conversation_users, inverse_of: :conversation
  has_many :users,
    through: :conversation_users

  has_attached_file :image, default_url: 'flower-icon2.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  before_validation :set_default_name

  def last_message
    messages.last
  end

  def last_message_timestamp
    last_message.nil? ? Time.now : last_message.created_at
  end

  private

  def set_default_name
    self.chat_name ||= SecureRandom.hex(8)
  end
end
