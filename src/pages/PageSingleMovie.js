import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { API_KEY, API_FETCH } from '../globals/globalVariables';
import SingleMovie from '../components/SingleMovie';
//import SingleMovieMedia from '../components/SingleMovieMedia';
import useGlobal from '../store/globalAppState';

const PageSingleMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  const globalStateAndActions = useGlobal();
  const globalActions = globalStateAndActions[1];

  /*
  In order to reduce multiple fetching requests to reduce network data and also increase app efficiency, 
  use TMDb API Append To Response method to fetch single movie details, videos, images and crew info 
  in only one single request.
  */
  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res =
          await fetch(`${API_FETCH}/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits
        `);

        let data = await res.json();
        console.log(data);
        setMovieData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSingleMovie();
  }, [id]);

  useEffect(() => {
    //ensure local state favs in sync with favs in local storage
    globalActions.setFavs();
  }, [globalActions]);

  return (
    <section className="singleMovie-main-section">
      {movieData ? (
        <SingleMovie movie={movieData} />
      ) : (
        <section className="loading-sect">
          <div className="loader">Loading...</div>
        </section>
      )}
    </section>
  );
};

export default PageSingleMovie;
