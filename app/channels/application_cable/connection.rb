module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user =
    end

    private

    def find_current_user
      if current_user = User.find_by(session[:session_token])
        current_user
      else
        reject_unauthorized_connection
      end
  end
end
