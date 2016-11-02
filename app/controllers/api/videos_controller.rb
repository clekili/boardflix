class Api::VideosController < ApplicationController
  def index
    category_name = params[:category];
    search_string = params[:search];
    if(category_name)
      category = Category.find_by(name: category_name)
      @videos = category.videos
    elsif(search_string)
      @videos = Video.where('name LIKE ?', "%#{search_string}%").all
    else
      @videos = Video.all
    end
  end

  def show
    @video = Video.find_by(id: params[:id])
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
