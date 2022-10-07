class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.integer :total_duration
      t.string :playlist_name
      t.string :playlist_img
    end
  end
end
