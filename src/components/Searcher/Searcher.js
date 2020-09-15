import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';

const Searcher = ( { fromHome }) => {

    const [query, setQuery] = useState('');
    const { push } = useHistory();

    const fetchQuery = () => {
        console.log(query);
    }

    const goToSearch = () => {
        push('/search');
    }

    return (
       <div>
        <SearchBar onClickCapture={goToSearch} />
       </div>
    )

}

export default Searcher;