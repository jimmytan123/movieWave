import { API_IMG780 } from '../globals/globalVariables';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-poster-holder.png';
import FavsBtn from './FavsBtn';

const MovieCard = ({ movie, checkFav }) => {
  //function to return css classes based on movie rating
  const setRatingScoreClass = () => {
    if (movie.vote_average >= 7) {
      return 'high-score';
    } else if (movie.vote_average === 0) {
      return 'none-score';
    } else {
      return 'low-score';
    }
  };

  return (
    <div className="single-movie-card">
      <div className="movie-card-content">
        <div className="poster-wrapper">
          {!movie.poster_path ? (
            <img src={noPoster} alt="no poster" />
          ) : (
            <img
              src={`${API_IMG780}${movie.poster_path}`}
              alt={`poster of ${movie.title}`}
            />
          )}
          <p className={`rating-score ${setRatingScoreClass()}`}>
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
              {movie.release_date ? movie.release_date : 'N/A'}
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
