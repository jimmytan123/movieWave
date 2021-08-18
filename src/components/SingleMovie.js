import noPoster from '../images/no-poster-holder.png';
import { posterEndPoint } from '../globals/globalVariables';
import FavsBtn from './FavsBtn';
import { API_TOKEN } from '../globals/globalVariables';
import { useEffect, useState } from 'react';

const SingleMovie = ({ movie }) => {
  const [movieCredit, setMovieCredit] = useState(null);

  useEffect(() => {
    const fetchSingleMovieCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + API_TOKEN,
            },
          }
        );

        let data = await res.json();
        console.log(data.crew);

        setMovieCredit(data.crew);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSingleMovieCredits();
  }, [movie.id]);

  const movieRuntime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    return hours + 'h ' + minutes + 'm';
  };

  const getDirector = () => {
    const result = movieCredit.find((person) => person.job === 'Director');
    if (result === undefined) {
      return 'Director coming soon...';
    }
    return result.name;
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
          <div className="timing-info">
            <p>{movie.release_date}</p>
            <p>{movieRuntime()}</p>
          </div>
          <div className="voteAndFav-info">
            <div className="single-movie-scoreBox">{movie.vote_average}</div>
            <FavsBtn movie={movie} className={'singlePage-fav-btn'} />
          </div>
          <h3>Overview</h3>
          {movie.overview ? (
            <p className="single-overview-text">{movie.overview}</p>
          ) : (
            <p className="single-overview-text">Overview coming soon...</p>
          )}
          <h3>Genre</h3>
          <div className="genre-list">
            {movie.genres.length > 0 ? (
              movie.genres.map((genre, i) => <p key={i}>{genre.name}</p>)
            ) : (
              <p>Genre coming soon...</p>
            )}
          </div>
          <h3>Director</h3>
          {movieCredit && <p>{getDirector()}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
