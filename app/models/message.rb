class Message < ApplicationRecord
  validates :sender_id, :conversation_id, :body. presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id
    
end
