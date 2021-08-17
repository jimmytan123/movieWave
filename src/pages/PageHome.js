import { useState, useEffect } from 'react';
import { appTitle, sortEndPoint, apiKey } from '../globals/globalVariables';
import MovieCard from '../components/MovieCard';
import MovieSortSelect from '../components/MovieSortSelect';

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
        `${sortEndPoint}/${sort}?api_key=${apiKey}&page=1`
      );
      let data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    };
    fetchMovies();
  }, [sort]);

  const handleSortChange = (e) => {
    const currentSelectedSort = e.target.value;
    setSort(currentSelectedSort);

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

  const handleShowMore = () => {
    setPages(pages + 1);

    // const fetchMovies = async () => {
    //   const res = await fetch(
    //     `${sortEndPoint}/${sort}?api_key=${apiKey}&page=${pages}`
    //   );
    //   let data = await res.json();
    //   // console.log(data.results);
    //   setMovies([...movies, data.results]);
    // };
    // fetchMovies();
  };

  return (
    <main className="home-main-section">
      <MovieSortSelect
        displayTitle={displayTitle}
        handleSortChange={handleSortChange}
      />
      <section className="movies-grid">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </section>
      {pages < 3 && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </main>
  );
};

export default PageHome;
