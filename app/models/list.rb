class List < ApplicationRecord
  validates :movie_id, :user_id, presence: true

  belongs_to :movie,
  foreign_key: :movie_id,
  class_name: :Movie

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end
