class HomepageController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]

  def index
  end

  # before_action :authenticate_user!

  def homepage
  end
end
