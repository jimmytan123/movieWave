import { useState } from 'react';

const SearchForm = ({ searchMovie }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchTerm);
  };

  return (
    <div className="search-form">
      <form action="/" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
