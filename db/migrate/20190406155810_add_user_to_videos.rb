class AddUserToVideos < ActiveRecord::Migration[5.2]
  def change
    add_reference :videos, :user, foreign_key: true
  end
end
