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
    if params[:query] == ""
      @conversations = current_user.conversations
        .includes(:users, :messages)
        .sort { |x, y| y.last_message_timestamp <=> x.last_message_timestamp }
    else
      @conversations = current_user.conversations
        .includes(:users, :messages)
        .where("lower(chat_name) LIKE ?", "%#{params[:query].downcase}%")
        .sort { |x, y| y.last_message_timestamp <=> x.last_message_timestamp }
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
