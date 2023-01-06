import React from 'react'
import Songs from './Songs'
import Grid from '@mui/material/Grid';

function SongsContainer({songs, playlists, addToPlaylists}) {

   







  return (
  <Grid container spacing={2}>
     <h2>Library</h2>
     {songs && songs.map(song => <Songs playlists={playlists} addToPlaylists={addToPlaylists} key={song.id} song={song} />)}
  </Grid>
  )
  
}

export default SongsContainer