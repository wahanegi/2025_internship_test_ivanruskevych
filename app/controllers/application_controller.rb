class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordInvalid, with: :show_record_errors
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  rescue_from StandardError, with: :handle_standard_error

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
