class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  # def perform(message)
  #   ActionCable
  #     .server
  #     .broadcast("chat_#{params[:id]}"),
  #                id: message.id,
  #                created_at: message.created_at.strftime('%H:%M'),
  #                body: message.body,
  #                sender_id: message.sender_id
  #              )
  # end

  def perform(message)
    ActionCable.server.broadcast(
      ("chat-#{message.conversation.id}"),
      message: ActiveSupport::JSON.decode(render_message(message))
    )
  end

  private

  def render_message(message)
    ApplicationController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
  end
end
