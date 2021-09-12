import 'react-responsive-carousel/lib/styles/carousel.min.css'; // webpack
import { Carousel } from 'react-responsive-carousel'; //webpack
import { Link } from 'react-router-dom';
import noBackdrop from '../images/no-backdrop-holder.png';

const BannerMovies = ({ bannerMovies }) => {
  //console.log(bannerMovies);

  return (
    <section className="banner-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={10000}
        infiniteLoop={true}
        showArrows={false}
        transitionTime={500}
      >
        {bannerMovies.map((bannerMovie, i) => {
          return (
            <div key={i}>
              <img
                src={
                  bannerMovie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`
                    : `${noBackdrop}`
                }
                alt={`backdrop of the movie ${bannerMovie.title}`}
                className="banner-image"
              />
              <div className="gradient-overlay">
                <Link to={`/movie/${bannerMovie.id}`}>
                  <h2>{bannerMovie.title}</h2>
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default BannerMovies;
