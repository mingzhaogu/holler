class Api::ConversationsController < ApplicationController

  # before_action :require_login

  def new
  end

  def create
    #use inverse_of
    @conversation = Conversation.create(conversation_params)

    #create ConversationUser
    conversation_params.userIds.each do |user_id|
      ConversationUser.create({
        user_id: user_id,
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
    if params[:query] == ""
      @conversations = current_user.conversations
        .includes(:users, :messages)
    else
      @conversations = current_user.conversations
        .includes(:users, :messages)
        .where("lower(chat_name) LIKE ?", "%#{params[:query].downcase}%")
        .order("messages.created_at DESC")
    end
  end

  def show
    @conversation = Conversation
      .includes(:users, :messages)
      .find(params[:id])
    @messages = @conversation.messages.includes(:user)
  end

  private

  def conversation_params
    params.require(:conversation).permit(:userIds, :chatName)
  end
end
