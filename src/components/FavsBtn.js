//return fav & unfav button, includes functions/actions related to favs/unfavs
import { unFilledHeartIcon, filledHeartIcon } from '../globals/icon';
import useGlobal from '../store/globalAppState';

const FavsBtn = ({ movie, className, checkFav }) => {
  const [globalState, globalActions] = useGlobal();

  //function to check if the movie is faved or not; if there is no existing favs movies, return false;
  //else, return true if the current movie belongs to the favs movies that are already stored in local storage
  const isFav = (id) => {
    if (globalState.favs.length === 0) {
      return false;
    }

    return globalState.favs.some((movie) => movie.id === id);
  };

  const handleRemoveFav = () => {
    globalActions.removeFav(movie.id);
  };

  const handleAddFav = () => {
    globalActions.addFav(movie);
  };

  return (
    <div className={`favs-btn ${className}`}>
      {!checkFav || isFav(movie.id) ? (
        <button
          className="filled-heart"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={handleRemoveFav}
        >
          {filledHeartIcon}
        </button>
      ) : (
        <button
          className="unfilled-heart"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={handleAddFav}
        >
          {unFilledHeartIcon}
        </button>
      )}
    </div>
  );
};

FavsBtn.defaultProps = {
  checkFav: true,
};

export default FavsBtn;
