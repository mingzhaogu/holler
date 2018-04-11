class ChatActionCable < ActionCable::Connection::WebSocket
  def initialize(app, options={})
    @app = app
  end

  def call(env)
    if ::WebSocket.Driver.websocket?(env)
      ActionCable.server.call(env)
    else
      @app.call(env)
    end
  end
end
