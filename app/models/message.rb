# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  sender_id       :integer          not null
#  conversation_id :integer          not null
#  body            :text             not null
#  message_type    :string           default("text"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Message < ApplicationRecord
  validates :sender_id, :conversation_id, :body, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id

  belongs_to :conversation, inverse_of: :messages
    # class_name: :Conversation,
    # primary_key: :id,
    # foreign_key: :conversation_id

  after_create_commit do
    MessageCreationEventBroadcastJob.perform_later(self)
  end
end
