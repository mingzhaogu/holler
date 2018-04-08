class ChatChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:id])
    stream_for conversation
  end

  def unsubscribed; end

  def create(opts)
    Message.create(
      body: opts.fetch('body')
    )
  end
end
