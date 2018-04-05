class Api::ConversationsController < ApplicationController

  # before_action :require_login

  def new
  end

  def create
    @conversation = Conversation.create

    render 'api/users/show'
  end

  def index
    @conversations = Conversation.select { |conv| conv.last_message }
    @conversations.sort_by do |conv|
      - conv.last_message.created_at.to_i
    end
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  # private
  #
  # def conversation_params
  #
  # end
end
