/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ChefProfile from "./ChefProfile";

// eslint-disable-next-line react/prop-types
const ChefProfiles = ({ allChef }) => {
	// console.log(allChef);
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">Chef Profiles</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{allChef.map((chef) => (
						<ChefProfile chef={chef} key={chef.id}></ChefProfile>
					))}
				</div>
			</div>
		</section>
	);
};

export default ChefProfiles;
