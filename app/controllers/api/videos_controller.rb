class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = params[:id]
    render :show
  end

  def create
    parameters = video_params
    category_id = parameters.category_id
    parameters.delete(:categoryId)
    @video = Video.new(parameters)
    if @video.save
      Categorization.create(video_id: @video.id, category_id: category_id);
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    parameters = video_params
    category_id = parameters.category_id
    parameters.delete(:categoryId);
    @video = Video.new(parameters)
    if @video.update
      if category_id
        Categorization.find_by(video_id: @video.id).destroy
        Categorization.create(video_id: @video.id, category_id: category_id);
      end
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    Video.find_by(id: params[:id]).destroy
    render json: {}
  end

  private
  def video_params
    params.require(:video).permit(:name, :url, :description, :categoryId)
  end
end