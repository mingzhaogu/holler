class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
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

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)

    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :image)
  end
end
