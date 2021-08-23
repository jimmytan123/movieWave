import { posterEndPoint } from '../globals/globalVariables';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-poster-holder.png';
import FavsBtn from './FavsBtn';

const MovieCard = ({ movie, checkFav }) => {
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
          <p
            className={
              movie.vote_average >= 7
                ? `rating-score high-score`
                : `rating-score`
            }
          >
            {movie.vote_average.toFixed(1)}
          </p>
          <FavsBtn
            movie={movie}
            className={'card-fav-btn'}
            checkFav={checkFav}
          />
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
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  checkFav: true,
};

export default MovieCard;
