// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";

const ChefRecipes = () => {
	const { allChef, chefRecipes } = useLoaderData();

	// console.log(allChef);
	console.log(chefRecipes);

	return (
		<>
			<ChefBanner allChef={allChef}></ChefBanner>
		</>
	);
};

export default ChefRecipes;
