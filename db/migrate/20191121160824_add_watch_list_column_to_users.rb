class AddWatchListColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :watch_list_items, :string, array: true, default: '{}'
  end
end
