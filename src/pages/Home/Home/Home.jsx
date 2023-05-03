// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import BestDishesSection from "../BestDishesSection/BestDishesSection";
import { useLoaderData } from "react-router-dom";
import ChefProfiles from "../ChefProfile/ChefProfiles";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
	const allChef = useLoaderData();
	// console.log(allChef);
	return (
		<>
			<Banner></Banner>
			<ChefProfiles allChef={allChef}></ChefProfiles>
			<BestDishesSection></BestDishesSection>
			<GetInTouch></GetInTouch>
		</>
	);
};

export default Home;
