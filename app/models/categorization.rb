class Categorization < ActiveRecord::Base
  validates :video_id, :category_id, presence: true

  belongs_to :category
  belongs_to :video
end
