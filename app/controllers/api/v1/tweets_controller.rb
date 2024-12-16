class Api::V1::TweetsController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :destroy ]
  before_action :set_tweet, only: %i[show destroy]

  def index
    @tweets = Tweet.includes(:user).order(created_at: :desc)
    render json: @tweets.to_json(include: { user: { only: :email } })
  end

  def create
    @tweet = current_user.tweets.build(tweet_params)
    if @tweet.save
      render json: @tweet, status: :created
    else
      render json: @tweet.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: @tweet
  end

  def destroy
    @tweet&.destroy
    render json: { message: "Tweet deleted!" }
  end

  private
  def set_tweet
    @tweet = Tweet.find(params[:id])
  end

  def tweet_params
    params.require(:tweet).permit(:content, :likes)
  end
end
