import React from 'react'
import Songs from './Songs'

function SongsContainer({songs, playlists, addToPlaylists}) {

   







  return (
  <div className='library'>
     <h2>Library</h2>
     {songs && songs.map(song => <Songs playlists={playlists} addToPlaylists={addToPlaylists} key={song.id} song={song} />)}
  </div>
  )
  
}

export default SongsContainer