import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import tmdbLogo from '../images/tmdb-logo.svg';

const PageAbout = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `About - ${appTitle}`;
  }, []);

  return (
    <section className="about-main-section">
      <h2>
        About {''}
        <span className="logo">
          <span className="logo-m">M</span>ovie
          <span className="logo-w">W</span>ave
        </span>
      </h2>
      <p>
        Welcome to the MovieWave database. This is an online database where
        movie lovers can find the relevant movie information based on popular,
        top-rated, now playing and upcoming movies. Millions of movies allow
        users to search and explore. This application also let user add and store movies to
        the favourite list.
      </p>
      <p>
        MovieWave is a React JS project designed and developed by Jimmy (Zhixi)
        Tan.
      </p>
      <p>
        This application uses the TMDb API but is not endorsed or certified by
        TMDb.
      </p>
      <div className='tmdb-div'>
        <a
          href="https://www.themoviedb.org/"
          title="tmdb site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="tmdb-logo" src={tmdbLogo} alt="TMDB Logo" />
        </a>
      </div>
    </section>
  );
};

export default PageAbout;
