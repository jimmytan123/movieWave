import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { API_KEY } from '../globals/globalVariables';
import SingleMovie from '../components/SingleMovie';
import SingleMovieMedia from '../components/SingleMovieMedia';

const PageSingleMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  /*
  In order to reduce multiple fetching requests to reduce network data and also increase app efficiency, 
  use TMDb API Append To Response method to fetch single movie details, videos, images and crew info 
  in only one single request.
  */
  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res =
          await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits
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

  return (
    <main className="singleMovie-main-section">
      <div className="single-movie">
        {movieData ? (
          <>
            <SingleMovie movie={movieData} />
            <SingleMovieMedia
              movieVideos={movieData.videos.results}
              movieGallery={movieData.images.backdrops}
            />
          </>
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    </main>
  );
};

export default PageSingleMovie;
