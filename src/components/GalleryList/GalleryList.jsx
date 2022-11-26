import GalleryItem from '../GalleryItem/GalleryItem.jsx';

export default function GalleryList(props) {
  console.log('in GalleryList', props.galleryItems);
  const galleryItems = props.galleryItems;
  const fetchGalleryItems = props.fetchGalleryItems;
  return (
    <>
      <p>Testing Return</p>
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
    </>
  );
}
