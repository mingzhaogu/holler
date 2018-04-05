class Api::ConversationsController < ApplicationController
  def new
  end

  def create
    @conversation =
  end

  def index
  end

  def show
  end

  private

  def conversation_params
    params.require(:conversation).permit(:)
  end
end
