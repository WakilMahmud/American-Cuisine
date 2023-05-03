// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
	const { allChef, chefRecipes } = useLoaderData();
	console.log(allChef);
	console.log(chefRecipes);
	return <div>Chef Recipes</div>;
};

export default ChefRecipes;
