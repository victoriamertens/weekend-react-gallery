import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  const fetchGalleryItems = () => {
    Axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        setGalleryItems(response.data);
        console.log(galleryItems);
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
      <GalleryList
        galleryItems={galleryItems}
        fetchGalleryItems={fetchGalleryItems}
      />
      <p>Gallery goes here</p>
      <img src="images/gallery-photo-1.png" />
    </div>
  );
}

export default App;
