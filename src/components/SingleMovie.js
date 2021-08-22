import { useEffect, useState } from 'react';
import noPoster from '../images/no-poster-holder.png';
import {
  posterEndPoint,
  API_TOKEN,
  appTitle,
} from '../globals/globalVariables';
import FavsBtn from './FavsBtn';

const SingleMovie = ({ movie }) => {
  const [movieCrew, setMovieCrew] = useState(null);

  //change tab title when rendering
  useEffect(() => {
    document.title = `${movie.title} - ${appTitle}`;
  }, [movie.title]);

  //fetching movie crew info
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
        //console.log(data);

        setMovieCrew(data.crew);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSingleMovieCredits();
  }, [movie.id]);

  //function to return director's name from the movie crew data
  const getDirector = () => {
    const result = movieCrew.find((person) => person.job === 'Director');
    if (result === undefined) {
      return 'Director coming soon...';
    }
    return result.name;
  };

  //function to convert pure minutes into hours and minutes
  const runtimeInHoursAndMins = (pureMintues) => {
    const hours = Math.floor(pureMintues / 60);
    const minutes = pureMintues % 60;
    return hours + 'h ' + minutes + 'm';
  };

  return (
    <>
      <div className="single-movie-main-grid">
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
        <div className="single-movie-overview-info">
          <h2>{movie.title}</h2>
          <div className="sub-icon-group">
            <div className="timing-info">
              <p>{movie.release_date}</p>
              <p>{runtimeInHoursAndMins(movie.runtime)}</p>
            </div>
            <div className="voteAndFav-info">
              <div className="single-movie-scoreBox">
                {movie.vote_average.toFixed(1)}
              </div>
              <FavsBtn movie={movie} className={'singlePage-fav-btn'} />
            </div>
          </div>
          <h3>Overview</h3>
          {movie.overview ? (
            <p className="single-overview-text">{movie.overview}</p>
          ) : (
            <p className="single-overview-text">Overview coming soon...</p>
          )}

          <div className="other-info">
            <div className="genre-info">
              <h3>Genre</h3>
              <div className="genre-list">
                {movie.genres.length > 0 ? (
                  movie.genres.map((genre, i) => <p key={i}>{genre.name}</p>)
                ) : (
                  <p>Genre coming soon...</p>
                )}
              </div>
            </div>
            <div className="crew-info">
              <h3>Director</h3>
              {movieCrew && <p>{getDirector()}</p>}
            </div>
          </div>
        </div>
      </div>
      {movie.tagline && <div className="tagline"><p>{movie.tagline}</p></div>}
    </>
  );
};

export default SingleMovie;
