import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ photos, openModal }) {
  return (
    <ul className={css.list}>
      {photos.map(photo => (
        <li key={photo.id} className={css.item}>
          <ImageCard
            alt={photo.alt_description}
            src={photo.urls}
            likes={photo.likes}
            name={photo.user.name}
            openModal={openModal}
          ></ImageCard>
        </li>
      ))}
    </ul>
  );
}
