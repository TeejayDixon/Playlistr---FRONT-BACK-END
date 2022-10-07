class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.string :artist
      t.string :genre
      t.string :album
      t.string :duration
      t.string :song_name
      t.string :label
      t.string :img_url
      t.string :song_rating
      t.string :mp3_url
    end

  end
end
