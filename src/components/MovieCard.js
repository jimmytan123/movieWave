import { posterEndPoint } from '../globals/globalVariables';
import noPoster from '../images/no-poster-holder.png';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="single-movie-card">
      <div className="movie-card-content">
        <div className="poster-wrapper">
          {!movie.poster_path ? (
            <img src={noPoster} alt="no poster" />
          ) : (
            <img
              src={`${posterEndPoint}${movie.poster_path}`}
              alt={`poster of ${movie.title}`}
            />
          )}
          <p className="rating-score">{movie.vote_average.toFixed(1)}</p>
          <div className="poster-overlay">
            <p className="hover-release-date">
              Release Date: <br />
              {movie.release_date}
            </p>
            {movie.overview.length === 0 ? (
              <p className="hover-movie-overview">
                Currently don't have an overview yet... Stay tune!
              </p>
            ) : movie.overview.length < 200 ? (
              <p className="hover-movie-overview">{movie.overview}</p>
            ) : (
              <p className="hover-movie-overview">
                {movie.overview.substring(0, 200)}...
              </p>
            )}
            <Link to={`/movie/${movie.id}`}>More Info</Link>
          </div>
        </div>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
