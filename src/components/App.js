import React, { useEffect } from 'react';
import { getAllRecipes } from '../service/RecipeService';

function App() {
  useEffect(() => {
    getAllRecipes().then((r) => console.log(r));
  }, []);

  return <div>Hola</div>;
}

export default App;
