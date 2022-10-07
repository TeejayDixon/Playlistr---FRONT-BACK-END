class PlaylistsController < ApplicationController

  #Read
  get "/playlists" do
    playlists = Playlist.all
    playlists.to_json(include: {
                        songitems: {
                          include: [
                            :track
                          ]
                        }
                      })
  end

  
  get "/playlists/:id" do
    playlists = Playlist.find(params[:id])
       playlists.to_json(include: {
                        songitems: {
                          include: [
                            :track
                          ]
                        }
                      })
  end

  #Create
  post '/playlists' do
    playlists = Playlist.create(playlist_name: params[:playlist_name], playlist_img: params[:playlist_img])
    status 201
    playlists.to_json
  end

  #Update
  patch '/playlists/:id' do
     playlists = Playlist.find(params[:id])

     playlists.update(playlist_name: params[:playlist_name], playlist_img: params[:playlist_img])

     playlists.to_json
  end

  #Delete
  delete '/playlists/:id/songs/:song_id' do
    playlists = Playlist.find(params[:id])
    songitems = playlists.songitems.where(track_id: params[:song_id])
    songitems.destroy_all
    status 204
  end

end                                                                                    