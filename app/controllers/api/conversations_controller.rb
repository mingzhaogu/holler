class Api::ConversationsController < ApplicationController

  # before_action :require_login

  def new
  end

  def create
    #use inverse_of
    @conversation = Conversation.create(conversation_params)

    #create ConversationUser
    conversation_params.users.each do |userId|
      ConversationUser.create({
        user_id: userId,
        conversation_id: @conversation.id
      })
    end

    render 'api/conversations/show'
  end

  def index
    # @conversations = Conversation.select { |conv| conv.last_message }
    # @conversations.sort_by do |conv|
    #   - conv.last_message.created_at.to_i
    # end

    @conversations = current_user.conversations.includes(:users, :messages)
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  private

  def conversation_params
    params.require(:conversation).permit(:userIds, :chat_name)
  end
end
