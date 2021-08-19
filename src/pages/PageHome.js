import { useState, useEffect } from 'react';
import useGlobal from '../store/globalAppState';
import { appTitle, sortEndPoint, API_TOKEN } from '../globals/globalVariables';
import MovieSortSelect from '../components/MovieSortSelect';
import Movies from '../components/Movies';
import ChangePageBtn from '../components/ChangePageBtn';

const PageHome = () => {
  const [sort, setSort] = useState('popular');
  const [movies, setMovies] = useState(null);
  const [pages, setPages] = useState(1);
  const [displayTitle, setDisplayTitle] = useState('Popular');

  const globalStateAndActions = useGlobal();
  const globalActions = globalStateAndActions[1];

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  useEffect(() => {
    globalActions.setFavs();

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${sortEndPoint}/${sort}?&language=en-US&page=${pages}`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + API_TOKEN,
            },
          }
        );
        let data = await res.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMovies();
  }, [sort, pages, globalActions]);

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
      {movies && <Movies movies={movies} />}
      <ChangePageBtn
        pages={pages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        maxPages={5}
      />
    </main>
  );
};

export default PageHome;
