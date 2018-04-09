class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:room]
  end

  def unsubscribed
    stop_all_streams
  end
end
