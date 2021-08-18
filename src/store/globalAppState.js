//global app state
import { appStorageName } from '../globals/globalVariables';
import globalHook from 'use-global-hook';

//function to get the favourited movies from local storage
const getFavs = () => {
  let favsFromStroage = localStorage.getItem(appStorageName);

  if (favsFromStroage === null) {
    favsFromStroage = [];
  } else {
    favsFromStroage = JSON.parse(favsFromStroage);
  }

  return favsFromStroage;
};

const actions = {
  addFav: (store, movie) => {
    const newFavs = [...store.state.favs, movie];
    //stringify array
    const newFavsForStorage = JSON.stringify(newFavs);
    // update the local storage
    localStorage.setItem(appStorageName, newFavsForStorage);
    //update state
    store.setState({ favs: newFavs });
  },

  removeFav: (store, id) => {
    let currentFavs = store.state.favs;
    //get the index value of the movie that need to be removed using JS array method .findIndex()
    const indexToRemove = currentFavs.findIndex((movie) => movie.id === id);
    //remove target array item
    currentFavs.splice(indexToRemove, 1);
    //stringify array
    let favsForStorage = JSON.stringify(currentFavs);
    //update the local storage
    localStorage.setItem(appStorageName, favsForStorage);
    //update state
    store.setState({ favs: currentFavs });
  },
  setFavs: (store) => {
    store.setState({ favs: getFavs() });
  },
};

const initialState = {
  favs: getFavs(),
};

const useGlobal = globalHook(initialState, actions);

export default useGlobal;
