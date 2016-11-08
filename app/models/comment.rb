# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  rating     :integer          default(0), not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :user_id, :video_id, :body, presence: true

  belongs_to :user
  belongs_to :video

  after_create :update_average_rating
  after_update :update_average_rating
  before_destroy :update_average_rating

  def update_average_rating
    p 'updating video'
    video = self.video
    comments = video.comments
    rating = comments.inject(0){ |sum, el| sum + el.rating}.to_f / comments.size
    video.update(rating: rating.round);
    p video.rating
  end
end
