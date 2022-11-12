import React from 'react'

import { useEffect, useState } from 'react'
const Search = () => {
    const [recipeItem,setRecipeItem] = useState("");
    const [list,setList] = useState([]);
    const searchRecipe = (e) => {
        setRecipeItem(e.target.value);
    }
    console.log(recipeItem);
    useEffect( () => {
       (async _ => {
        const response = await fetch(`https://api.edamam.com/search?q=${recipeItem}&
             app_id=1457f1f4&app_key=091089340ce0b276bb3ad961854057fd`);
             const data = await response.json();
        // recipee.get(`?q=${recipeItem}&app_id=1457f1f4&app_key=d114f2b81b8e9e54ca3fc2baa07a7ad9`);
        console.log(data);
        // console.log("process");
        setList(data.hits);
       })();
    },([recipeItem]));
    console.log(list);
  return (
    <div>
        <input onClick={searchRecipe}/> <button onClick={searchRecipe}>search</button>
        <p>eg : pizza,burger</p>
        {list.length === 0 ? <h2>Enter Correct Recipe</h2> 
        :
        list.map((elem,idx) => {
           return(
            <div key={idx}>
                
                <h3>{elem.recipe.label}</h3>
               <img src={elem.recipe.image} alt="recipe"/>
                <p>{elem.recipe.mealType}</p>
                <p>{elem.recipe.ingredientLines}</p>
            </div>
           );
        })}
        
    </div>
  )
}

export default Search