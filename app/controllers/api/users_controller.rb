class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      # splash_conversation(@user)
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    if params[:query] == ""
      @users = User.all
    else
      @users = User.includes(:conversations)
        .where("lower(username) LIKE ?", "%#{params[:query].downcase}%")
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def splash_conversation(user)
    conv = Conversation.create!({
      chat_name: "Ohana",
      image: File.open(File.join(Rails.root, 'app/assets/images/Plumeria-Flower-Logo-Vector.png'))
    })

    [1, 2, 3, 4, 5, 6, 8, user.id].each do |user|
      ConversationUser.create!(
        conversation_id: conv.id,
        user_id: user
      )
    end

    messages = [{
      conversation_id: conv.id, sender_id: 2, message_type: "Sticky",
      body: "https://media2.giphy.com/media/zQZsoCpu3Ipq0/200.gif?cid=e1bb72ff5acf0caa72702e55598ea62f"
    },
    {
      conversation_id: conv.id, sender_id: 2,
      body: "Aloha!"
    },
    {
      conversation_id: conv.id, sender_id: 1,
      body: "Welcome to Holler -- a real-time messaging application inspired by Facebook Messenger and the developer's love for our ohana."
    },
    {
      conversation_id: conv.id, sender_id: 5,
      body: "Try creating a message using the 'paper and pencil' icon near the top of your screen."
    },
    {
      conversation_id: conv.id, sender_id: 4,
      body: "If you want to test ride my evil scientific research of live chat, you can open this messaging application in an incognito browser and logging in as a different user."
    },
    {
      conversation_id: conv.id, sender_id: 3,
      body: "In addition to sending text messages, you can also send stickers and gifs (courtesy of Giphy) via the 'paw' and 'gift' icons below. Emojis also work (depending on browser and device compatibility)!"
    },
    {
      conversation_id: conv.id, sender_id: 2, message_type: "Giphy",
      body: "https://media0.giphy.com/media/I0IavIJOpDpCg/200.gif?cid=e1bb72ff5acf0b872e4e6279418eaae2"
    },
    {
      conversation_id: conv.id, sender_id: 2, message_type: "Giphy",
      body: "https://media2.giphy.com/media/f8YTKdAHrx9gQ/200.gif?cid=e1bb72ff5acf0b6941633249363a2ffb"
    },
    {
      conversation_id: conv.id, sender_id: 2,
      body: "To the top right, you can edit the name of this conversation and change the conversation image using the 'pencil' icon. You can toggle the conversation details sidebar using the 'information' icon."
    },
    {
      conversation_id: conv.id, sender_id: 1,
      body: "Feel free to play around and let me know what you think! You can contact the developer, Annie, using the Github and/or LinkedIn icons in the conversation details sidebar. Enjoy!"
    },
    {
      conversation_id: conv.id, sender_id: 8, message_type: "Giphy",
      body: "https://media2.giphy.com/media/cQys4y6ESMyxq/200.gif?cid=e1bb72ff5acf0b2d4279576a63e096d8"
    },
    {
      conversation_id: conv.id, sender_id: 6, message_type: "Giphy",
      body: "https://media3.giphy.com/media/mQFE7siDwCrcY/200.gif?cid=e1bb72ff5acf0d33367a4d5749dee610"
    }]

    messages.each do |msg|
      Message.create!(msg)
    end
  end
end
