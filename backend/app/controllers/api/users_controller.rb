class Api::UsersController < ApplicationController
  def shuffle
    users = User.take 6
    render(json: users, include: [:looking_for, :gender])
  end

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end
end
