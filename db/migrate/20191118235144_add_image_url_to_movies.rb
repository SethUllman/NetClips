class AddImageUrlToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :image_url, :string, null: false
    add_column :movies, :video_url, :string, null: false
  end
end
