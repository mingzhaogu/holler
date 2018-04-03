class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence true:
  validates :password, length: { minimum: 8, allow_nil: true}

  attr_reader :password

  before_validation :ensure_session_token, :default_img

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  def default_img
    self.img_url ||= 'https://i.imgur.com/GfeDqkc.png'
  end
end
