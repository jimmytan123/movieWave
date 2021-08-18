import { posterEndPoint } from '../globals/globalVariables';

const MovieCard = ({ movie }) => {
  return (
    <div className="single-movie-card">
      <div className="movie-card-content">
        <div className='poster-wrapper'>
          <img
            src={`${posterEndPoint}${movie.poster_path}`}
            alt={`poster of ${movie.title}`}
          />
          <p className="rating-score">{movie.vote_average.toFixed(1)}</p>
        </div>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
