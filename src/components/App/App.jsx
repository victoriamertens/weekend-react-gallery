import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const fetchGalleryItems = () => {
    Axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    console.log('in useEffect for page load');
    fetchGalleryItems();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/gallery-photo-1.png" />
    </div>
  );
}

export default App;
