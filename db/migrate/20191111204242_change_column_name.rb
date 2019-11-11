class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :movies, :case, :cast
  end
end
