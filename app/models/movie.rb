class Movie < ApplicationRecord
  validates :title, :year, :director, :cast, :writers, :genres, :maturity_rating, :description, :likes, :image_url, :video_url, presence: true

  has_many :watch_lists,
  foreign_key: :movie_id,
  class_name: :WatchList
end
