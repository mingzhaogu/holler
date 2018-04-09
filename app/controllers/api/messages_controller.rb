class Api::MessagesController < ApplicationController

  before_action :require_login

  def new
  end

  def create
    # how would we get the conversation_id? through params?
    @message = Message.new(message_params)
    # @message.conversation_id = params[:id]
    # @message.sender_id = current_user.id

    if @message.save
      render json: "Message sent! :D"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
    @message = Message.find(params[:id])
    # @limit = params[:limit]

    # this is what params looks like
    # {
    #   "message": {
    #   "format": "json",
    #   "controller": "api/messages",
    #   "action": "show",
    #   "conversation_id": "3",
    #   "id": "2"
    #   }
    # }
  end

  def index
    # @messages = Conversation.find(params[:conversation_id]).messages
    convoMessages = Conversation.find(params[:conversation_id]).messages
    @limit = params[:limit];
    # @messages = Conversation.find(params[:conversation_id]).messages
    @messages = convoMessages.limit(@limit).order("created_at DESC").load.reverse
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :conversation_id, :body)
  end
end
