class RemoveWatchListItemsFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :watch_list_items
  end
end
