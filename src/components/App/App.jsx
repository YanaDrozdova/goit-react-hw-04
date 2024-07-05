// import style from './App.module.css'

import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchPhotos } from '../../photos-api';

export default function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const handleSearch = newQuery => {
    setPhotos([]);
    setQuery(newQuery);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFhotos() {
      try {
        setError(false);
        const data = await fetchPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
      }
    }
    getFhotos();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {error && <p>Oops! There was an error, please reload this page!</p>}
    </>
  );
}
