class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    add_user_to_splash(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout!
    remove_user_from_splash(@current_user)
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def add_user_to_splash(user)
    return nil if user.id.between?(1, 9)

    ConversationUser.create!(
      conversation_id: 1,
      user_id: @user.id
    )
  end

  def remove_user_from_splash(user)
    return nil if user.id.between?(1, 9)

    cu = ConversationUser.find_by({
      conversation_id: 1,
      user_id: user.id
    })
    cu.destroy if cu

    # if want to delete messages too
    # messages = Message.find_by({
    #   conversation_id: 1,
    #   sender_id: user.id
    # })
    # messages.destroy if messages
  end
end
