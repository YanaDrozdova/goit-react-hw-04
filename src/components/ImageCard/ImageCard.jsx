export default function ImageCard({ alt, src }) {
  return (
    <div>
      <img
        src={src.small}
        alt={alt}
        // onClick={() => openModal({ src: src.large, alt })}
      />
    </div>
  );
}
