import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';
import { getRecipesByQuery } from '../../service/RecipeService';
import CardRecipe from '../CardRecipe/CardRecipe';

const Searcher = ( { fromHome, setRecipes }) => {

    const [query, setQuery] = useState('');
    const { push } = useHistory();

    const fetchQuery = () => {
        getRecipesByQuery(query)
        .then(response => {
            console.log(response);
            setRecipes(response);
        })
        .catch(error => console.log(error));
    }

    const goToSearch = () => {
        if (fromHome) push('/search');
    }

    return (
       <>
        <SearchBar 
          autoFocus={!fromHome}
          placeholder="Buscar receta..."
          onClickCapture={goToSearch} 
          onChange={newValue => setQuery(newValue)}
          onRequestSearch={fetchQuery}
         /> 
       </>
    )

}

export default Searcher;