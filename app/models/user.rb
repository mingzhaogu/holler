# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string
#

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true}

  has_many :messages, -> { order(created_at: :desc) },
    foreign_key: :sender_id
  has_many :conversation_users, inverse_of: :user
  # has_many :conversations, -> { order()}
  has_many :conversations, 
    through: :conversation_users

  attr_reader :password

  before_validation :ensure_session_token, :set_default_image

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
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def set_default_image
    self.image_url ||= 'https://i.imgur.com/GfeDqkc.png'
  end
end
