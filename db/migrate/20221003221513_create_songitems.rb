class CreateSongitems < ActiveRecord::Migration[6.1]
  def change
    create_table :songitems do |t|
      t.string :comment
      t.integer :rating, default: 1
      t.integer :playlist_id
      t.integer :track_id

    end
  end
end
