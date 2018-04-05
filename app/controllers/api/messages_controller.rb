class Api::MessagesController < ApplicationController

  before_action :require_login

  def new
  end

  def create
    # how would we get the conversation_id? through params?
    @message = Message.new(message_params)
    @message.conversation_id = params[:id]
    @message.sender_id = current_user.id

    if @message.save
      render
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
