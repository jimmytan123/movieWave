import MovieCard from './MovieCard';

const Movies = ({ movies }) => {
  return (
    <section className="movies-grid">
      {movies.map((movie, i) => {
        return <MovieCard movie={movie} key={i} />;
      })}
    </section>
  );
};

export default Movies;
