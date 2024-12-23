class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordInvalid, with: :show_record_errors
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  rescue_from StandardError, with: :handle_standard_error

  # TODO: It is necessary to uncomment this part of the code because it is required for successfully passing the tests in `spec/requests/api/v1/users_spec.rb`. However, its presence triggers a 401 error for login and registration operations.
  # TODO: I couldn’t properly implement an exception for this case (before_action :authenticate_user!, except [...])
  # def authenticate_user!
  #   unless user_signed_in?
  #     render json: { error: "User not logged in" }, status: :unauthorized
  #   end
  # end

  private

  def handle_record_invalid(exception)
    render json: { error: exception.record.errors.full_message }, status: :unprocessable_entity
  end

  def handle_record_not_found(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def handle_standard_error(exception)
    render json: { error: exception.message }, status: :internal_server_error
  end
end
