import Axios from 'axios';
import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
  console.log('in Gallery Item');
  let item = props.item;
  console.log('item:', item);
  let fetchGalleryItems = props.fetchGalleryItems;
  let id = props.key;

  const [imageState, setImageState] = useState(true);

  const updateLikes = () => {
    console.log(props);
    Axios.put('/gallery/like/' + props.item.id)
      .then(() => {
        console.log('likes updated');
        fetchGalleryItems();
      })
      .catch((error) => alert(error));
  };
  const toggleImageState = () => {
    setImageState(!imageState);
  };

  return (
    <div class="gallery-item">
      {imageState ? (
        <img src={item.path} onClick={toggleImageState} />
      ) : (
        <p class="description" onClick={toggleImageState}>
          {item.description}
        </p>
      )}

      <button onClick={updateLikes}>Like</button>
      {item.likes > 0 ? (
        <p>Likes: {item.likes} </p>
      ) : (
        <p>{'0 people like this :('}</p>
      )}
    </div>
  );
}
export default GalleryItem;
