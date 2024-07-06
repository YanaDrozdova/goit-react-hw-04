import css from './App.module.css'
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchPhotos } from '../../photos-api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import EmptyResult from '../EmptyResult/EmptyResult';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSearch = newQuery => {
    setPhotos([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFhotos() {
      try {
        setLoading(true);
        setIsEmpty(false);
        setError(false);
        const data = await fetchPhotos(query, page);
        if (data.total === 0) {
          setIsEmpty(true);
          return;
        }
        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getFhotos();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {isEmpty && <EmptyResult />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </div>
  );
}
