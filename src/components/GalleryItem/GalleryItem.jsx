import Axios from 'axios';

export default function GalleryItem(props) {
  console.log('in Gallery Item');
  let item = props.item;
  console.log('item:', item);
  let fetchGalleryItems = props.fetchGalleryItems;
  let id = props.key;

  const updateLikes = () => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
      .then(console.log('likes updated'))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <img src={item.path} />
      <p>{item.description}</p>
      <button>Like</button>
      <p>{item.likes} like this!</p>
      <p>0 people like this :(</p>
    </div>
  );
}
