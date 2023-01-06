import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header'
import '../index.css';
import SongsContainer from '../Components/SongsContainer'
import PlaylistsContainer from './PlaylistsContainer';

function MusicContainer() {
  const [songs, setSongs] = useState([])

  const [playlists, setPlaylists] = useState([])

  const [selectedPlaylists, setSelectedPlaylists] = useState([])

  
  
  useEffect(() => { 
    fetch('http://localhost:9292/playlists')
      .then(res => res.json())
      .then(data => {
        setPlaylists(data)
        setSelectedPlaylists(data[0])
      })
    fetch('http://localhost:9292/songs')
      .then(res => res.json())
      .then(data => setSongs(data))
      
    
  }, [])


  function addToPlaylists(playlistID,id) {
    fetch('http://localhost:9292/songitems', {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ playlist_id: playlistID, track_id: id})
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
    
  }


  function Spotify() {
    
    
    useEffect(() => { 
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => {
        setPlaylists(data)
        setSelectedPlaylists(data[0])
      })

  }, [])
  }


  function refreshedPlaylists() {
     fetch('http://localhost:9292/playlists')
      .then(res => res.json())
       .then(setPlaylists)
     fetch(`http://localhost:9292/playlists/${selectedPlaylists.id}`)
      .then(res => res.json())
      .then(setSelectedPlaylists)
  }


  function removeFromPlaylists(songID) {
    fetch(`http://localhost:9292/playlists/${selectedPlaylists.id}/songs/${songID}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
  }


  function handleRatingSubmit(newRating, songitemID) {
    fetch(`http://localhost:9292/songitems/${songitemID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({rating: parseInt(newRating)})
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
  }

  function addNewPlaylists(newPlaylists) {
    fetch(`http://localhost:9292/playlists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ playlist_name: newPlaylists })
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
    }
  


  

 

  return (
  
    
    <div>

      
      <div>
        <SongsContainer addToPlaylists={addToPlaylists} playlists={playlists} songs={songs} /> 
        </div>
        
        <div>
        <PlaylistsContainer
          addNewPlaylists={addNewPlaylists}
          removeFromPlaylists={removeFromPlaylists}
          playlists={playlists}
          selectedPlaylists={selectedPlaylists}
          setSelectedPlaylists={setSelectedPlaylists}
          handleRatingSubmit={handleRatingSubmit}
        />
      </div>
      
      
   </div>
    

  )
  }

export default MusicContainer