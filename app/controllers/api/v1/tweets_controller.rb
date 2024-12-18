class Api::V1::TweetsController < ApplicationController
  before_action :authenticate_user!, only: %i[ create destroy ]
  before_action :set_tweet, only: %i[show destroy]
  before_action :set_owned_tweet, only: %i[ destroy ]

  def index
    @tweets = Tweet.includes(:user).order(created_at: :desc)
    render json: @tweets.to_json(include: { user: { only: :email } }), status: :ok
  end

  def create
    @tweet = current_user.tweets.build(tweet_params)
    @tweet.save!
    render json: @tweet, status: :created
  end

  def show
    render json: @tweet, status: :ok
  end

  def destroy
    if @tweet&.destroy
      render json: { message: "Tweet deleted!" }, status: :ok
    else
      render json: { error: "Failed to delete tweet or you are not authorized" }, status: :unprocessable_entity
    end
  end

  private
  def set_tweet
    @tweet = Tweet.find(params[:id])
  end

  def set_owned_tweet
    @tweet = current_user.tweets.find_by(id: params[:id])
    render json: { error: "You don't have permission to delete this tweet!" }, status: :not_found unless @tweet
  end

  def tweet_params
    params.require(:tweet).permit(:content, :likes)
  end
end
