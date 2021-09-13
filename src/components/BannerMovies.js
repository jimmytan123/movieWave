import { Carousel } from 'react-responsive-carousel'; //webpack
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // webpack
import { Link } from 'react-router-dom';
import { API_IMG_ORGINAL } from '../globals/globalVariables';
import noBackdrop from '../images/no-backdrop-holder.png';

const BannerMovies = ({ bannerMovies }) => {
  return (
    <section className="banner-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={10000}
        infiniteLoop={true}
        showArrows={false}
        useKeyboardArrows={true}
        transitionTime={500}
      >
        {bannerMovies.map((bannerMovie, i) => {
          return (
            <div key={i}>
              <img
                src={
                  bannerMovie.backdrop_path
                    ? `${API_IMG_ORGINAL}${bannerMovie.backdrop_path}`
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
