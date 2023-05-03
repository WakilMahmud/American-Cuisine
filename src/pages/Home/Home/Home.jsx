// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import ChefProfile from "../ChefProfile/ChefProfile";
import BestDishesSection from "../BestDishesSection/BestDishesSection";

const Home = () => {
	return (
		<>
			<Banner></Banner>
			<ChefProfile></ChefProfile>
			<BestDishesSection></BestDishesSection>
			{/* Add more extra section */}
		</>
	);
};

export default Home;
