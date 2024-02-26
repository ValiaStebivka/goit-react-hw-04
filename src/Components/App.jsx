import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "../api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
    setTotal(null);
  };

  const handleLoadMore = () => setPage(page + 1);

  useEffect(() => {
    if (query === "") return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchArticles(query.split("/")[1], page);
        setPhotos((prevResults) => [...prevResults, ...fetchedData.results]);
        setTotal(fetchedData.total);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage>
          Whoops! Something bad happened, try reloading page
        </ErrorMessage>
      ) : photos.length > 0 ? (
        <ImageGallery data={photos} />
      ) : null}
      {total === 0 && <ErrorMessage>No results found </ErrorMessage>}
      {loading && <Loader />}
      {photos.length > 0 && page * 9 <= total && !loading && !error && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
