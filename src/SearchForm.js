import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form onSubmit={e => e.preventDefault()} className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {error.show && (
        <div className="error" style={{ fontWeight: 'bold' }}>
          {error.msg}
        </div>
      )}
    </form>
  );
};

export default SearchForm;
