class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: user_params[:username])
    if @user && @user.is_password?(user_params[:password])
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination!"], status: 422
    end
  end

  def destroy
    logout(current_user)
    render json: {}
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
