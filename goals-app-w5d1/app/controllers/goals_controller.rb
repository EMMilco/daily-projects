class GoalsController < ApplicationController
  def new
  end

  def create
    goal = Goal.new(goal_params)
    goal.user_id = current_user.id
    if goal.save
      redirect_to goal_url(goal)
    else
      flash[:errors] = goal.errors.full_messages
      render :new
    end
  end

  def show
    @goal = Goal.find(params[:id])
  end

  def index
    @goals= Goal.all
  end

  def edit
    @goal = Goal.find(params[:id])
  end

  def update
    @goal = current_user.goals.find(params[:id])
    if @goal && @goal.update(goal_params)
      redirect_to goal_url
    else
      flash[:errors] = ['1111']
      render :edit
    end
  end

  def destroy
  end
  
  def goal_params
    params.require(:goal).permit(:name, :status, :public)
    
  end
end
