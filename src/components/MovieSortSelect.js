//MovieSortSelect.js component, to return a selection dropdown for movie sort
const MovieSortSelect = ({ displayTitle, handleSortChange }) => {
  //data for option list for form select
  const optionList = [
    {
      name: 'Popular',
      value: 'popular',
    },
    {
      name: 'Top Rated',
      value: 'top_rated',
    },
    {
      name: 'Now Playing',
      value: 'now_playing',
    },
    {
      name: 'Upcoming',
      value: 'upcoming',
    },
  ];
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
          {optionList.map((option, i) => {
            return (
              <option value={option.value} key={i}>
                {option.name}
              </option>
            );
          })}
        </select>
      </form>
    </section>
  );
};

export default MovieSortSelect;
