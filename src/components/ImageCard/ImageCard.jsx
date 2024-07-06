import css from './ImageCard.module.css';

export default function ImageCard({ alt, src, likes, name, openModal }) {
  return (
    <>
      <img
        className={css.photo}
        src={src.small}
        alt={alt}
        onClick={() => openModal({ src: src.regular, alt })}
      />
      <div className={css.info}>
        <p className={css.text}>Author: {name}</p>
        <p className={css.text}>Likes: {likes}</p>
      </div>
    </>
  );
}
