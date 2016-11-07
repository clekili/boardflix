class Api::CommentsController < ApplicationController
  def create
    parameters = comment_params
    parameters.delete(:id)
    @comment = Comment.new(parameters)
    if @comment.save
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
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:id, :user_id, :video_id, :body, :rating)
  end
end
