class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.integer :year, null: false 
      t.integer :seasons
      t.string :director, null: false 
      t.string :case, null: false 
      t.string :writers, null: false 
      t.string :genres, null: false 
      t.string :maturity_rating, null: false 
      t.text :description, null: false 
      t.integer :likes, null: false

      t.timestamps
    end
    add_index :movies, :title
  end
end
