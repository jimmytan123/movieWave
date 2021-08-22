import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globalVariables';

const SingleMovieMedia = ({ movie }) => {
  const [videos, setVideos] = useState(null);

  //fetching movie trailers info
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

  //function to find Youtube video result from the fetching movie trailers info
  const videoFromYoutube = () => {
    const ytVideoResult = videos.find((video) => video.site === 'YouTube');

    if (ytVideoResult === undefined) {
      return;
    }

    return (
      <div className="movie-video-section">
        <h3>{ytVideoResult.name}</h3>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ytVideoResult.key}?rel=0`}
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
