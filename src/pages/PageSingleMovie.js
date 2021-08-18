import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globalVariables';
import SingleMovie from '../components/SingleMovie';

const PageSingleMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + API_TOKEN,
            },
          }
        );

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
      {movieData && <SingleMovie />}
    </main>
  );
};

export default PageSingleMovie;
