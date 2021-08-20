import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { appTitle, API_KEY } from '../globals/globalVariables';

const PageSearch = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `Search - ${appTitle}`;
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();

      const fetchSearchMovies = async () => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
          );
  
          let data = await res.json();
          console.log(data.results);
  
          setMovies(data.results);
          setSearchTerm('')
        } catch (err) {
          console.log(err.message);
        }
      };

      fetchSearchMovies();
  }

  return (
    <main className="search-main-section">
      <form action="/" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {movies && (
        <Movies movies={movies} />
      )}
    </main>
  );
};

export default PageSearch;
