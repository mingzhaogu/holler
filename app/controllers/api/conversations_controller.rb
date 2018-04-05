class Api::ConversationsController < ApplicationController
  def new
  end

  def create
    @conversation = Conversation.create
    render 'api/conversations/show'
  end

  def index
  end

  def show
  end

  # private
  #
  # def conversation_params
  #
  # end
end
