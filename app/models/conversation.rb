class Conversation < ApplicationRecord
  
  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :conversation_id

  has_and_belongs_to_many :users
end
