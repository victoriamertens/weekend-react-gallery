import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

export default function GalleryList(props) {
  console.log('in GalleryList', props.galleryItems);
  const galleryItems = props.galleryItems;
  const fetchGalleryItems = props.fetchGalleryItems;
  return (
    <div class="gallery-list">
      {galleryItems.map((item) => {
        console.log('in map', item.id);
        return (
          <GalleryItem
            key={item.id}
            fetchGalleryItems={fetchGalleryItems}
            item={item}
          />
        );
      })}
    </div>
  );
}
