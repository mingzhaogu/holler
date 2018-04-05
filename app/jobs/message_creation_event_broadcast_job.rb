class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
                 id: message.id,
                 created_at: message.created_at.strftime('%H:%M'),
                 content: message.body)
  end
end
