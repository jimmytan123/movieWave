const MovieSortSelect = ({ displayTitle, handleSortChange }) => {
  return (
    <section className="movie-sort-select">
      <div className="movie-sort-title">
        <h2>
          <span>{displayTitle}</span> Movies
        </h2>
      </div>
      <form>
        <label htmlFor="selectSort">Display by: </label>
        <select name="selectSort" id="selectSort" onChange={handleSortChange}>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="now_playing">Now Playing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </form>
    </section>
  );
};

export default MovieSortSelect;
