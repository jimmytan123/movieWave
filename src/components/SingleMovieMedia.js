import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globalVariables';

const SingleMovieMedia = ({ movie }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + API_TOKEN,
            },
          }
        );

        let data = await res.json();
        //console.log(data.results);
        setVideos(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchVideoInfo();
  }, [movie.id]);

  const videoFromYoutube = () => {
    const result = videos.find((video) => video.site === 'YouTube');
    //console.log(result);

    if (result === undefined) {
      return;
    }

    return (
      <div className="movie-video-section">
        <h3>{result.name}</h3>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${result.key}?rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <section className="movie-media-section">
      {videos && videoFromYoutube()}
    </section>
  );
};

export default SingleMovieMedia;
