class AddWatchListIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :watch_list_id, :integer
  end
end
