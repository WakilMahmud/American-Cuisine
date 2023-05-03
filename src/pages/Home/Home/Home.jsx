// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import ChefProfile from "../ChefProfile/ChefProfile";

const Home = () => {
	return (
		<>
			<h1 className="bg-primary">Login</h1>
			<Banner></Banner>
			<ChefProfile></ChefProfile>
			{/* <Extra Section 1></Extra Section 1>
			<Extra Section 2></Extra Section 2> */}
		</>
	);
};

export default Home;
