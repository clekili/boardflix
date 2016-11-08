class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def create
    parameters = comment_params
    parameters.delete(:id)
    @comment = Comment.new(parameters)
    if @comment.save
      update_average_rating(@comment.video)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    parameters = comment_params
    id = parameters[:id]
    parameters.delete(:id)
    @comment = Comment.find_by(id: id)
    if @comment.update(parameters)
      update_average_rating(@comment.video)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      update_average_rating(@comment.video)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:id, :user_id, :video_id, :body, :rating)
  end

  def update_average_rating(video)
    comments = video.comments
    rating = comments.inject(0){ |sum, el| sum + el.rating}.to_f / comments.size
    video.update(rating: rating.round);
  end
end
