class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :categoizations

  has_many :videos,
    through: :categorizations,
    source: :video
end
