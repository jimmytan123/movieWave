//component for single movie media section (trailers, backdrops)

import { posterEndPoint } from '../globals/globalVariables';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // webpack
import { Carousel } from 'react-responsive-carousel'; //webpack

const SingleMovieMedia = ({ movieVideos, movieGallery }) => {
  //function to find the first Youtube video result from the fetching movie trailers info
  //and use Youtube's iframe to show videos
  //if no Youtube video link is found, return nothing;
  const videoFromYoutube = () => {
    const ytVideoResult = movieVideos.find((video) => video.site === 'YouTube');

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

  //webpack for carousel, images coming from backdrop image from the single movie data
  const imagesCarousel = () => {
    return (
      <div className="carousel-section">
        <h3>Images</h3>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay
          interval={5000}
          infiniteLoop={true}
        >
          {movieGallery.map((image, i) => {
            return (
              <div key={i}>
                <img
                  src={`${posterEndPoint}${image.file_path}`}
                  alt="gallery of movie"
                ></img>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };

  return (
    <section className="movie-media-section">
      {movieGallery.length > 0 && imagesCarousel()}
      {movieVideos.length > 0 && videoFromYoutube()}
    </section>
  );
};

export default SingleMovieMedia;
