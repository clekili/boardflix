# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  youtube_id  :string           not null
#  description :text
#  view_count  :integer          default(0)
#  rating      :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ActiveRecord::Base
  validates :name, :youtube_id, presence: true
  validates :name, uniqueness: true

  has_many :comments
  has_many :categorizations

  has_many :categories,
    through: :categorizations,
    source: :category
end
