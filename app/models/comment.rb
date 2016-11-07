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
  validates: :user_id, :video_id, :body, presence: true

  belongs_to :user
  belongs_to :video
end
