# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_03_221543) do

  create_table "playlists", force: :cascade do |t|
    t.integer "total_duration"
    t.string "playlist_name"
    t.string "playlist_img"
  end

  create_table "songitems", force: :cascade do |t|
    t.string "comment"
    t.integer "rating", default: 1
    t.integer "playlist_id"
    t.integer "track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "artist"
    t.string "genre"
    t.string "album"
    t.string "duration"
    t.string "song_name"
    t.string "label"
    t.string "img_url"
    t.string "song_rating"
    t.string "mp3_url"
  end

end
