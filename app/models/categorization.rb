# == Schema Information
#
# Table name: categorizations
#
#  id          :integer          not null, primary key
#  video_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Categorization < ActiveRecord::Base
  validates :video_id, :category_id, presence: true

  belongs_to :category
  belongs_to :video
end
