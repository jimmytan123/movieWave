import { useState, useEffect } from 'react';
import useGlobal from '../store/globalAppState';
import { appTitle, API_TOKEN, API_FETCH } from '../globals/globalVariables';
import { getDate } from '../utilities/date';
import BannerMovies from '../components/BannerMovies';
import MovieSortSelect from '../components/MovieSortSelect';
import Movies from '../components/Movies';
import ChangePageBtn from '../components/ChangePageBtn';

const PageHome = () => {
  const [sort, setSort] = useState('popular');
  const [movies, setMovies] = useState(null);
  const [bannerMovies, setBannerMovies] = useState(null);
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

    /* 
    When fetching upcoming movies, the TMDb API may return some movies that are already released,
    so add a condition to the endpoint based on the sort state, only returns the movies that will 
    be released in the future when selecting the upcoming filter.
    */
    const getEndPoint = () => {
      if (sort === 'upcoming') {
        return `${API_FETCH}/upcoming?&language=en-US&page=${pages}&primary_release_date.gte=${getDate()}`;
      } else {
        return `${API_FETCH}/${sort}?&language=en-US&page=${pages}`;
      }
    };

    const fetchMovies = async () => {
      try {
        const res = await fetch(`${getEndPoint()}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_TOKEN,
          },
        });
        let data = await res.json();
        setMovies(data.results);

        let bannerMoviesData = data.results.slice().splice(0,5); //copy the data.results array and get the first 5 movies for banner section
        setBannerMovies(bannerMoviesData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMovies();
  }, [sort, pages, globalActions]);

  const handleSortChange = (e) => {
    const currentSelectedSort = e.target.value;
    setSort(currentSelectedSort);  //update the current sort selection state
    setPages(1); //when sort select changes, set back page to 1 to fetch the first page of the movies

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
    //scrollToTop();
  };

  const handlePreviousPage = () => {
    setPages(pages - 1);
    //scrollToTop();
  };

  const handleChoosePage = (pageNum) => {
    setPages(pageNum);
    //scrollToTop();
  };

  //function to call when changing pages, scroll to top of the web page
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <section className="home-main-section">
      {bannerMovies && <BannerMovies bannerMovies={bannerMovies} />}
      <MovieSortSelect
        displayTitle={displayTitle}
        handleSortChange={handleSortChange}
      />

      {movies ? (
        <Movies movies={movies} />
      ) : (
        <section className="loading-sect">
          <div className="loader">Loading...</div>
        </section>
      )}

      <ChangePageBtn
        pages={pages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleChoosePage={handleChoosePage}
        maxPages={5}
      />
    </section>
  );
};

export default PageHome;
