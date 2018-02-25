class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(user_params[:username], user_params[:password])
    if user
      log_in(user)
      redirect_to new_session_url
    else
      flash.now[:errors] = ['invalid log-in credentials']
      render :new
    end
  end

  def destroy
    logout if logged_in?
    redirect_to new_session_url
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
