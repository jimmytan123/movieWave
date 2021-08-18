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
