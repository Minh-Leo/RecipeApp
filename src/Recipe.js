import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
  let numCal = calories.toFixed(2);
  return (
    <div className='recipe'>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>- Amount of calories: {numCal} cal</p>
      <img className='image' src={image} alt='' />
    </div>
  );
};

export default Recipe;
