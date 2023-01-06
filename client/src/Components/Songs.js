import React from 'react'
import AddtoPlaylistForm from '../pages/AddtoPlaylistForm';
import SongRatingForm from '../pages/SongRatingForm';



function Songs({song, playlists, addToPlaylists, removeFromPlaylists, songitem, handleRatingSubmit}) {
    
  
  
  


  return (
    
  
      <div className="yup">
        <div className="card" >
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
      </div>
      <div className='delete'>
        {playlists ? <AddtoPlaylistForm songID={song.id} playlists={playlists} addToPlaylists={addToPlaylists} /> :
          <button onClick={() => removeFromPlaylists(song.id)}>Delete</button>}
        </div>
    </div>
  );
}
export default Songs;