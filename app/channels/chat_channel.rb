class ChatChannel < ApplicationCable::Channel
  def subscribed
    debugger
    stream_from "chat-2"
  end

  def unsubscribed
    stop_all_streams
  end

  private

  def channel_name
    debugger
    "chat-#{params[:id]}"
  end

  # def format_response(data)
  #   {
  #     body: data["body"],
  #     username: current_user.username
  #   }
  # end
end
