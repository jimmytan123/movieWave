import { posterPath } from '../globals/globalVariables';

const MovieCard = ({ movie }) => {
  return (
    <div className="single-movie-card">
      <div className="movie-card-content">
        <div className='poster-wrapper'>
          <img
            src={`${posterPath}${movie.poster_path}`}
            alt={`poster of ${movie.title}`}
          />
          <p className="rating-score">{movie.vote_average.toFixed(1)}</p>
        </div>
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
