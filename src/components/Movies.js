//Movies.js component, to return a list of movie cards based on the movies data from API
import MovieCard from './MovieCard';

const Movies = ({ movies, checkFav }) => {
  return (
    <section className="movies-grid">
      {movies.map((movie, i) => {
        return <MovieCard movie={movie} key={i} checkFav={checkFav} />;
      })}
    </section>
  );
};

Movies.defaultProps = {
  checkFav: true,
};

export default Movies;
