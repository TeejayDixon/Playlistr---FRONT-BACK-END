class TracksController < ApplicationController
 
  
  # Read
  get "/songs" do
    songs = Track.all
    songs.to_json
  end

  
  get "/songs/:id" do
    song = Track.find(params[:id])
    song.to_json
  end

  #Create
  post '/songs' do
    track = Track.create(artist: params[:artist], genre: params[:genre], album: params[:album], duration: params[:duration], song_name: params[:song_name], label: params[:label], img_url: params[:img_url], song_rating: params[:song_rating], mp3_url: params[:mp3_url])
    status 201
    track.to_json
  end

  #Update
  patch '/songs/:id' do
     track = Track.find(params[:id])

     track.update(artist:params[:artist], genre:params[:genre], album:params[:album], duration:params[:duration], song_name:params[:song_name], label:params[:label], img_url:params[:img_url], song_rating:params[:song_rating], mp3_url:params[:mp3_url])

     track.to_json
  end

  


  #Delete
  delete '/songs/:id' do
    track = Track.find(params[:id])
    track.destroy
    status 204
  end
  

  

end


