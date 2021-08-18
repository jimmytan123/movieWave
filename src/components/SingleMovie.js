import noPoster from '../images/no-poster-holder.png';
import { posterEndPoint } from '../globals/globalVariables';
import { unFilledHeartIcon } from '../globals/icon';


const SingleMovie = ({ movie }) => {
  const movieRuntime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    return hours + 'h : ' + minutes + 'm';
  };
  return (
    <div className="single-movie">
      <div className="single-movie-content">
        <div className="single-movie-poster">
          {!movie.poster_path ? (
            <img src={noPoster} alt="no poster" />
          ) : (
            <img
              src={`${posterEndPoint}${movie.poster_path}`}
              alt={`poster of ${movie.title}`}
            />
          )}
        </div>
        <div className="single-movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movieRuntime()}</p>
          <div className='single-movie-scoreBox'>{movie.vote_average}</div>
          {/* for testing */}
          <span style={{cursor: 'pointer'}}>{unFilledHeartIcon()}</span>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
