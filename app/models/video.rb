class Video < ActiveRecord::Base
  validates :name, :youtube_url, presence: true
  validates :name, uniqueness: true

  has_many :categorizations

  has_many :categories,
    through: :categorizations,
    source: :category
end
