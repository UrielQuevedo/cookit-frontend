import Searcher from 'components/Searcher/searcher';
import React from 'react';

const NOT_SHOW_ON_PATHS = ['/', '/recipes'];

const SearchBar = () =>
  NOT_SHOW_ON_PATHS.every(p => p !== window.location.pathname) && (
    <div style={{ transform: 'translateY(8px)' }}>
      <Searcher />
    </div>
  );

export default SearchBar;
