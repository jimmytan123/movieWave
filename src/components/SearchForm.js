import { useState } from 'react';

const SearchForm = ({ searchMovie }) => {
  const [searchTerm, setSearchTerm] = useState('');

  //only call the API to search movie when clicking the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchTerm);
  };

  return (
    <div className="search-form">
      <form action="/" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
