import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import  SplashPage  from './pages/SplashPage'
import  PlaylistType  from './pages/Header'
import  MusicContainer  from './pages/MusicContainer'
import PickGenre from './Components/PickGenre'
import Layout from './Components/Layout'
import Home from './Components/Home'


function App() {
   





  return (
  


    <>
      
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="songs/:id" element={<SongDetails />} />
          <Route path="playlists" element={<PlaylistDetails />} />
          <Route path="userprofile" element={<UserProfile />} /> */}
        </Route >
     

      
      </Routes>
    </>
    
  )
}

export default App
