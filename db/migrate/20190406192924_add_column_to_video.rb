class AddColumnToVideo < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :likes, :integer, :default => 0
    add_column :videos, :dislikes, :integer, :default => 0
  end
end
