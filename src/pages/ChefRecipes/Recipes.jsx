/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Recipe from "./Recipe";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipes }) => {
	// console.log(recipes);

	return (
		<div className="pb-32 bg-gray-50">
			<h1 className="font-bold text-center text-5xl py-16">Chef&apos;s Recipe</h1>
			<div className="grid grid-cols-1  ">
				{recipes.map((recipe) => (
					<Recipe recipe={recipe} key={recipe.meal_id}></Recipe>
				))}
			</div>
		</div>
	);
};

export default Recipes;
