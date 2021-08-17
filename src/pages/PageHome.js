import { useState, useEffect } from 'react';
import { appTitle, sortEndPoint, apiKey } from '../globals/globalVariables';
import MovieSortSelect from '../components/MovieSortSelect';
import Movies from '../components/Movies';

const PageHome = () => {
  const [sort, setSort] = useState('popular');
  const [movies, setMovies] = useState([]);
  const [displayTitle, setDisplayTitle] = useState('Popular');
  const [pages, setPages] = useState(1);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `${sortEndPoint}/${sort}?api_key=${apiKey}&page=${pages}`
      );
      let data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    };
    fetchMovies();
  }, [sort, pages]);

  const handleSortChange = (e) => {
    const currentSelectedSort = e.target.value;
    setSort(currentSelectedSort);

    setPages(1);

    switch (currentSelectedSort) {
      case 'popular':
        setDisplayTitle('Popular');
        break;
      case 'top_rated':
        setDisplayTitle('Top Rated');
        break;
      case 'now_playing':
        setDisplayTitle('Now Playing');
        break;
      case 'upcoming':
        setDisplayTitle('Upcoming');
        break;
      default:
        setDisplayTitle('Default');
    }
  };

  const handleNextPage = () => {
    setPages(pages + 1);
  };

  const handlePreviousPage = () => {
    setPages(pages - 1);
  };

  return (
    <main className="home-main-section">
      <MovieSortSelect
        displayTitle={displayTitle}
        handleSortChange={handleSortChange}
      />
      <Movies movies={movies} />
      {pages === 1 ? (
        <button className="page-btn" disabled>Previous</button>
      ) : (
        <button className="page-btn" onClick={handlePreviousPage}>
          Previous
        </button>
      )}
      {pages < 3 ? (
        <button className="page-btn" onClick={handleNextPage}>
          Next
        </button>
      ) : (
        <button className="page-btn" disabled>Next</button>
      )}
    </main>
  );
};

export default PageHome;
