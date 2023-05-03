// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Banner from "../Banner/Banner";
import BestDishesSection from "../BestDishesSection/BestDishesSection";
import { useLoaderData } from "react-router-dom";
import ChefProfiles from "../ChefProfile/ChefProfiles";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
	// const [loading, setLoading] = useState(true);
	// const navigation = useNavigation();
	const allChef = useLoaderData();
	// console.log(allChef);
	// if (allChef) {
	// 	setLoading(false);
	// }

	return (
		<>
			{/* <div>{navigation.state === "loading" && <Spinner></Spinner>}</div> */}

			{/* {loading && <Spinner></Spinner>} */}
			<Banner></Banner>
			<ChefProfiles allChef={allChef}></ChefProfiles>
			<BestDishesSection></BestDishesSection>
			<GetInTouch></GetInTouch>
		</>
	);
};

export default Home;
