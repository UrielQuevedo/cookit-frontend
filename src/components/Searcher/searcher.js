import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';

const PLACEHOLDER = 'Buscar receta...';

const Searcher = () => {
  const [query, setQuery] = useState('');
  const { push } = useHistory();

  const handleSearch = () => {
    push(`/recipes?search=${query}`);
  };

  const onHandleCancel = () => {
    setQuery('');
  };

  const handleChangeQuery = newValue => {
    setQuery(newValue);
  };

  return (
    <SearchBar
      placeholder={PLACEHOLDER}
      onChange={handleChangeQuery}
      onRequestSearch={handleSearch}
      onCancelSearch={onHandleCancel}
    />
  );
};

export default Searcher;
