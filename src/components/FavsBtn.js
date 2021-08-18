import { unFilledHeartIcon, filledHeartIcon } from '../globals/icon';
import useGlobal from '../store/globalAppState';

const FavsBtn = ({ movie, className, checkFav }) => {
  const [globalState, globalActions] = useGlobal();

  const isFav = (id) => {
    if (globalState.favs.length === 0) {
      return false;
    }

    return globalState.favs.some((movie) => movie.id === id);
  };

  const handleRemoveFav = () => {
    globalActions.removeFav(movie.id);
    console.log(globalState.favs);
  };

  const handleAddFav = () => {
    globalActions.addFav(movie);
    console.log(globalState.favs);
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
