class WatchList < ApplicationRecord
  validates :movie_id, :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :movies,
  foreign_key: :watch_list_id,
  class_name: :Movie
end
