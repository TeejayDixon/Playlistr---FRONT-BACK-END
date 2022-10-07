class SongitemsController < ApplicationController
 
  
  # Read
  get "/songitems" do
    songitems = Songitem.all
    songitems.to_json
  end

  
  get "/songitems/:id" do
    songitems = Songitem.find(params[:id])
    songitems.to_json
  end

  #Create
  post '/songitems' do
    songitems = Songitem.create(comment:params[:comment], rating:params[:rating], playlist_id:params[:playlist_id], track_id:params[:track_id])
    status 201
    songitems.to_json
  end

  #Update
  patch '/songitems/:id' do
     songitems = Songitem.find(params[:id])

     songitems.update(comment:params[:comment], rating:params[:rating])

     songitems.to_json
  end

  


  #Delete
  delete '/songitems/:id' do
    songitems = Songitem.find(params[:id])
    songitems.destroy
    status 204
  end
  

  

end