import { useEffect } from 'react';
import useGlobal from '../store/globalAppState';
import Movies from '../components/Movies';
import { appTitle } from '../globals/globalVariables';
import { unFilledHeartIcon } from '../globals/icon';

const PageFavourites = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `Favourites - ${appTitle}`;
  }, []);

  const [globalState, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.setFavs();
  }, [globalActions]);

  return (
    <main className="favourites-main-section">
      <h2>
        <span className="orange-text">Favourites</span> Movie
      </h2>
      {globalState.favs.length === 0 ? (
        <p className='no-favs-text'>
          No favourited movies. Please discover your favourites and click
          {unFilledHeartIcon} to add some movies here.
        </p>
      ) : (
        <Movies movies={globalState.favs} checkFav={false} />
      )}
    </main>
  );
};

export default PageFavourites;
