class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:show, :update, :destroy]
  def index
    render json: current_user.videos.all
  end
  def create
    video = current_user.videos.create(video_params)
    if video.save
      render json: video
    else
      render json: video.errors, status: 422
    end
  end
  def update
    if @video.update(video_params)
      render json: @video
    else
      render json: @video.errors, status: 422
    end
  end
  def destoy
    @video.destroy
    render json: { message: "deleted"}
  end
  private
    def video_params
      params.permit(:video).require(:title, :duration, :genre, :description, :trailer)
    end
    def set_video
      @video = Video.find(params[:id])
    end
end
