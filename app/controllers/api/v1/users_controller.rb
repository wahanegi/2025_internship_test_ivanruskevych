class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def current_user_info
    if current_user
      render json: {
        email: current_user.email
      }
    else
      render json: { error: "User not  logged in" }, status: :unauthorized
    end
  end
end
