class Api::VideosController < ApplicationController
  def index
    category_name = params[:category];
    search_string = params[:search];
    if(category_name && !category_name.empty?)
      category = Category.find_by(name: category_name)
      @videos = category.videos
    elsif(search_string && !search_string.empty?)
      @videos = Video.where('name LIKE ?', "%#{search_string}%").all
    else
      @videos = Video.all
    end
  end

  def show
    @video = Video.find_by(id: params[:id])
    @video.update(view_count: @video.view_count + 1)
    render :show
  end

  def create
    parameters = video_params
    category = Category.find_by(name: parameters[:category])
    parameters.delete(:category)
    parameters.delete(:id)
    @video = Video.new(parameters)
    if category && @video.save
      Categorization.create(video_id: @video.id, category_id: category.id);
      render :show
    else
      errors = @video.errors.full_messages
      errors.push("Category can't be empty!") unless category
      render json: errors, status: 422
    end
  end

  def update
    parameters = video_params
    category = Category.find_by(name: parameters[:category])
    parameters.delete(:category);
    @video = Video.find_by(id: parameters[:id])
    parameters.delete(:id);
    if category && @video.update(parameters)
      Categorization.find_by(video_id: @video.id).destroy
      Categorization.create(video_id: @video.id, category_id: category.id);
      render :show
    else
      errors = @video.errors.full_messages
      errors.push("Category can't be empty!") unless category
      render json: errors, status: 422
    end
  end

  def destroy
    @video = Video.find_by(id: params[:id])

    if @video.destroy
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  private
  def video_params
    params.require(:video).permit(:id, :name, :youtube_id, :description, :category, :view_count, :rating);
  end
end
