class Movie < ApplicationRecord
  validates :title, :year, :director, :cast, :writers, :genres, :maturity_rating, :description, :likes, presence: true

  belongs_to :watch_list,
  foreign_key: :watch_list_id,
  class_name: :WatchList
end
