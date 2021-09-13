import { useEffect } from 'react';
import { API_IMG780, appTitle } from '../globals/globalVariables';
import FavsBtn from './FavsBtn';
import noPoster from '../images/no-poster-holder.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; //webpack for progress circle
import 'react-circular-progressbar/dist/styles.css';

const SingleMovie = ({ movie }) => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `${movie.title} - ${appTitle}`;
  }, [movie.title]);

  //function to return the crew's name from the movie crew data by passing a postion parameter
  const getCrewInfo = (position) => {
    const results = movie.credits.crew.filter(
      (person) => person.job === position
    );
    //console.log(results);

    if (results.length === 0) {
      return <p>{position} coming soon...</p>;
    }

    const resultList = results.map((result, i) => (
      <p key={i} className="crew">
        {result.name}
      </p>
    ));

    return resultList;
  };

  //function to convert pure minutes from API into hours and minutes format
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
              src={`${API_IMG780}${movie.poster_path}`}
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
                {/* {movie.vote_average.toFixed(1)} */}
                <CircularProgressbar
                  value={movie.vote_average.toFixed(1)}
                  maxValue={10}
                  text={`${movie.vote_average.toFixed(1) * 10}%`}
                  styles={buildStyles({
                    textColor: '#ff983d',
                    trailColor: '#f4f4f4',
                    textSize: '30px',
                    pathColor: 'rgb(0, 196, 255)',
                  })}
                />
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
            <div className="director-info">
              <h3>Director</h3>
              {movie.credits.crew && getCrewInfo('Director')}
            </div>
            <div className="producer-info">
              <h3>Producer</h3>
              {movie.credits.crew && getCrewInfo('Producer')}
            </div>
            <div className="screenplay-info">
              <h3>Screenplay</h3>
              {movie.credits.crew && getCrewInfo('Screenplay')}
            </div>
          </div>
        </div>
      </div>
      {movie.tagline && (
        <div className="tagline">
          <p>{movie.tagline}</p>
        </div>
      )}
    </>
  );
};

export default SingleMovie;
