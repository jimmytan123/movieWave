
const SingleMovieMedia = ({ movieVideos }) => {
  //function to find the first Youtube video result from the fetching movie trailers info
  const videoFromYoutube = () => {
    const ytVideoResult = movieVideos.results.find(
      (video) => video.site === 'YouTube'
    );

    //console.log(ytVideoResult);

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
      {movieVideos.results && videoFromYoutube()}
    </section>
  );
};

export default SingleMovieMedia;
