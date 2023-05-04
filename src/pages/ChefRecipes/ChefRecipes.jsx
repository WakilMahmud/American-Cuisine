// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import Recipes from "./Recipes";

const ChefRecipes = () => {
	const { allChef, chefRecipes } = useLoaderData();

	// console.log(allChef);
	// console.log(chefRecipes.recipes);

	return (
		<>
			<ChefBanner allChef={allChef}></ChefBanner>
			<Recipes recipes={chefRecipes.recipes}></Recipes>
		</>
	);
};

export default ChefRecipes;
