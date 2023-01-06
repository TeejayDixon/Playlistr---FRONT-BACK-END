import React from 'react'
import AddtoPlaylistForm from '../pages/AddtoPlaylistForm';
import SongRatingForm from '../pages/SongRatingForm';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Songs({song, playlists, addToPlaylists, removeFromPlaylists, songitem, handleRatingSubmit}) {
    
  
  
  


  return (
    
  
      <Grid item xs={2}>
        <Item>
          <div className='card-body'>
          <img className="albumart card-img-top" src={song.img_url} />
          <h3 className="artist">{song.artist}</h3>
          <p className="album-name">{song.album}</p>
          <p className="song-name">{song.song_name}</p>
          <p className="genre">{song.genre}</p>
          <p className="duration">{song.duration}</p>
          <p className="song-rating" onClick={() => { }}>Billboard Rating:{song.song_rating}</p>
          {songitem && <p>My Rating{songitem.rating}</p>}
          {songitem && <SongRatingForm handleRatingSubmit={handleRatingSubmit} songitem={songitem} />}
          <p className="label">{song.label}</p>
            <a className="mp3-url" href={song.mp3_url}>Song Link</a>
        </div>
      </Item>
      <div className='delete'>
        {playlists ? <AddtoPlaylistForm songID={song.id} playlists={playlists} addToPlaylists={addToPlaylists} /> :
          <button onClick={() => removeFromPlaylists(song.id)}>Delete</button>}
        </div>
    </Grid>
  );
}
export default Songs;