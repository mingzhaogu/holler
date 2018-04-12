class Api::ConversationsController < ApplicationController

  # before_action :require_login

  def new
  end

  def create
    @conversation = Conversation.create(chat_name: params[:chatname])

    params[:users].each do |user_id|
      ConversationUser.create({
        user_id: user_id,
        conversation_id: @conversation.id
      })
    end

    @messages = []

    render 'api/conversations/show'
  end

  def edit
  end

  def update
    @conversation = Conversation.find(params[:id])
    @conversation.update(conversation_params)
    @messages = @conversation.messages.includes(:user)

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
    params.require().permit(:users, :chatName)
  end
end
