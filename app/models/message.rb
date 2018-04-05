class Message < ApplicationRecord
  validates :sender_id, :conversation_id, :body, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id

  belongs_to :conversation,
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :conversation_id

  after_create_commit do
    MessageCreationEventBroadcastJob.perform_later(self)
  end
end
