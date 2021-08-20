import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import tmdbLogo from '../images/tmdb-logo.svg';

const PageAbout = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `About - ${appTitle}`;
  }, []);

  return (
    <main className="about-main-section">
      <h2>
        About <span className='logo'><span className="logo-m">M</span>ovie
        <span className="logo-w">W</span>ave</span>
      </h2>
      <p>
        Welcome to the MovieWave database. This is an online database where
        movie lovers can find the relevant movie information based on popular,
        top rated, now playing and upcoming movies. This application also let user add
        and store movies to the favourite list.
      </p>
      <p>
        This application uses the TMDb API but is not endorsed or certified by
        TMDb.
      </p>
      <div>
        <img className="tmdb-logo" src={tmdbLogo} alt="TMDB Logo" />
      </div>
    </main>
  );
};

export default PageAbout;
