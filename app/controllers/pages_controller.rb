class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:users]
  def home
  end

  def users
  end
end
