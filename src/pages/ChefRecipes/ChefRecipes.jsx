// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import Recipes from "./Recipes";
import Spinner from "../Shared/Spinner/Spinner";

const ChefRecipes = () => {
	const navigation = useNavigation();
	// console.log(navigation.state);
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
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
