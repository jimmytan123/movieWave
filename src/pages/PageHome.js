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

  //change tab title when rendering
  useEffect(() => {
    document.title = `${appTitle}`;
  }, []);

  useEffect(() => {
    //ensure local state favs in sync with favs in local storage
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
    //update the current sort selection state
    setSort(currentSelectedSort);

    //when sort select changes, set back page to 1 to fetch the first page of the movie data
    setPages(1);

    //update the display text based on sort selection
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
    scrollToTop();
  };

  const handlePreviousPage = () => {
    setPages(pages - 1);
    scrollToTop();
  };

  const handleChoosePage = (pageNum) => {
    setPages(pageNum);
    scrollToTop();
  };

  //function to call when changing pages, scroll to top of the web page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="home-main-section">
      <MovieSortSelect
        displayTitle={displayTitle}
        handleSortChange={handleSortChange}
      />

      {movies ? (
        <Movies movies={movies} />
      ) : (
        <div className="loader">Loading...</div>
      )}

      <ChangePageBtn
        pages={pages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleChoosePage={handleChoosePage}
        maxPages={5}
      />
    </main>
  );
};

export default PageHome;
