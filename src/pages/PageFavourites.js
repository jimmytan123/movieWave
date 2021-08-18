import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import useGlobal from '../store/globalAppState';
import Movies from '../components/Movies';
import { Link } from 'react-router-dom';

const PageFavourites = () => {
  useEffect(() => {
    document.title = `${appTitle} - Favourites`;
  }, []);

  // const [globalState, globalActions] = useGlobal();
  const globalStateAndglobalActions = useGlobal();
  const globalState = globalStateAndglobalActions[0];

  return (
    <main className="favourites-main-section">
      <h2>Favourites Movie</h2>
      {globalState.favs.length === 0 ? (
        <p>
          No favourited movies. Please visit the <Link to="/">homepage</Link> to
          favourite a movie.
        </p>
      ) : (
        <Movies movies={globalState.favs} checkFav={false} />
      )}
    </main>
  );
};

export default PageFavourites;
