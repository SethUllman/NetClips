class CreateWatchLists < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_lists do |t|
      t.integer :movie_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
