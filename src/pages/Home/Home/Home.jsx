// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import BestDishesSection from "../BestDishesSection/BestDishesSection";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefProfiles from "../ChefProfile/ChefProfiles";
import GetInTouch from "../GetInTouch/GetInTouch";
import Spinner from "../../Shared/Spinner/Spinner";

const Home = () => {
	const navigation = useNavigation();
	// console.log(navigation.state);
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
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
