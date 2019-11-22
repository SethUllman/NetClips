class AddWatchListItemsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :watch_list_items, :text, array: true, default: []
  end
end
