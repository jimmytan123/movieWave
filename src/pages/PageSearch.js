import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import SearchForm from '../components/SearchForm';
import useGlobal from '../store/globalAppState';
import { appTitle, API_KEY, API_SEARCH } from '../globals/globalVariables';

const PageSearch = () => {
  const [movies, setMovies] = useState(null);
  const [displayTerm, setDisplayTerm] = useState(null);
  const [searchInputError, setSearchInputError] = useState(null);

  const globalStateAndActions = useGlobal();
  const globalActions = globalStateAndActions[1];

  //change tab title when rendering
  useEffect(() => {
    document.title = `Search - ${appTitle}`;
  }, []);

  //ensure local state favs in sync with favs in local storage
  useEffect(() => {
    globalActions.setFavs();
  }, [globalActions]);

  //function to calling API to fetch search result
  const fetchSearchMovies = async (searchTerm) => {
    try {
      const res = await fetch(
        `${API_SEARCH}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
      );

      let data = await res.json();
      //console.log(data.results);

      setMovies(data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  //function to accept a query, processing error handling before calling fetchSearchMovies to fetch the data
  const searchMovie = (searchTerm) => {
    searchTerm = searchTerm.trim();

    if (searchTerm === '') {
      setMovies(null);
      setSearchInputError(
        'Search term is empty, please enter a valid search term.'
      );
      return;
    }

    setSearchInputError(null);
    fetchSearchMovies(searchTerm);
    setDisplayTerm(searchTerm);
  };

  const displayEmptyResultMsg = () => {
    if (searchInputError) {
      return <p className="error-msg">{searchInputError}</p>;
    } else if (movies && movies.length === 0) {
      return (
        <p className="error-msg">
          Sorry, there are no movies that matched your search term.
        </p>
      );
    }
  };

  return (
    <section className="search-main-section">
      <div className="hero">
        <p className="intro-p">
          Millions of amazing movies for you to discover. Explore now.
        </p>
        <SearchForm searchMovie={searchMovie} />
      </div>
      {displayEmptyResultMsg()}
      {movies && movies.length !== 0 && (
        <>
          <h2 className="search-heading">
            Show search result for: {displayTerm}
          </h2>
          <Movies movies={movies} />
        </>
      )}
    </section>
  );
};

export default PageSearch;
