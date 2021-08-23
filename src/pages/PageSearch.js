import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import SearchForm from '../components/SearchForm';
import { appTitle, API_KEY } from '../globals/globalVariables';

const PageSearch = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `Search - ${appTitle}`;
  }, []);

  const [movies, setMovies] = useState(null);
  const [displayTerm, setDisplayTerm] = useState(null);
  const [searchInputError, setSearchInputError] = useState(null);

  const fetchSearchMovies = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
      );

      let data = await res.json();
      console.log(data.results);

      setMovies(data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

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
    <main className="search-main-section">
      <SearchForm searchMovie={searchMovie} />
      {displayEmptyResultMsg()}
      {movies && movies.length !== 0 && (
        <>
          <h2 className='search-heading'>Show search result for: {displayTerm}</h2>
          <Movies movies={movies} />
        </>
      )}
    </main>
  );
};

export default PageSearch;
