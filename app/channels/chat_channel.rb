class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from channel_name
  end

  def unsubscribed
    stop_all_streams
  end

  def speak(data)
    message_data = {
      body: data[:body],
      sender_id: data[:user_id],
      conversation_id: data[:conversation_id],
      message_type: data[:text]
    }

    Message.create(message_data)
  end

  private

  def channel_name
    # "chat-#{params[:id]}"
    "test_room"
  end

  # def format_response(data)
  #   {
  #     body: data["body"],
  #     username: current_user.username
  #   }
  # end
end
