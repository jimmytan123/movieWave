import { useState, useEffect } from 'react';
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
  const [checkReady, setCbeckReady] = useState(false);

  useEffect(() => {
    //ensure local state favs in sync with favs in local storage
    globalActions.setFavs();
    setCbeckReady(true);
  }, [globalActions]);

  return (
    <section className="favourites-main-section">
      <h2>
        <span className="orange-text">Favourites</span> Movies
      </h2>
      {globalState.favs.length === 0 ? (
        <p className="no-favs-text">
          No favourited movies. Please discover your favourites and click
          {unFilledHeartIcon} to add some movies here.
        </p>
      ) : (
        <>
          {checkReady && <Movies movies={globalState.favs} checkFav={false} />}
          <p className="favs-count-msg">
            You have {globalState.favs.length} favourite{' '}
            {globalState.favs.length === 1 ? 'movie' : 'movies'}
          </p>
        </>
      )}
    </section>
  );
};

export default PageFavourites;
