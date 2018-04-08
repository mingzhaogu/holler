class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable
      .server
      .broadcast(Conversation.find(params[:id]),
                 id: message.id,
                 created_at: message.created_at.strftime('%H:%M'),
                 content: message.body)
  end
end
