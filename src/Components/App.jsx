import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "../api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./ImageModal/ImageModal"; // + імпорт компоненту модального вікна
import { Toaster } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(null);
  const [empty, setEmpty] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [urlModal, setUrlModal] = useState("");
  const [altModal, setAltModal] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
    setTotal(null);
    setEmpty(false)
  };

  const handleLoadMore = () => setPage(page + 1);

  // Функція для відкриття модального вікна та встановлення вибраного фото
  const handleOpenModal = (urlModal, alt) => {
    setAltModal(alt);
    setUrlModal(urlModal);
    setIsModalOpened(true);
  };

  // Функція для закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpened(false);
    setUrlModal("");
    setAltModal("");
  };

  useEffect(() => {
    if (query === "")
      return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await fetchArticles(query, page);
        if (results.length === 0) {
          setEmpty(true);
          return;
        }
        setPhotos((prev) => [...prev, ...results]);
        setTotal(total_pages);
      } catch (error){
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
      {error && (
        <ErrorMessage>
          Whoops! Something bad happened, try to reload the page
        </ErrorMessage>

      )}
      {loading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery images={photos} openModal={handleOpenModal} />
      )}
      
      {empty && <ErrorMessage>No results found </ErrorMessage>}
      {photos.length > 0 && page <= total && !loading && !error && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}

        <ImageModal
          isOpened={isModalOpened}
          close={handleCloseModal}
          url={urlModal}
          alt={altModal}
      />
      <Toaster id="123" position="top-right" />
      
    </>
  );
}

export default App;
