// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ChefBanner = ({ allChef }) => {
	const params = useParams();
	// console.log(params.id);

	// eslint-disable-next-line react/prop-types
	const specificChef = allChef.find((chef) => chef.id == params.id);
	// console.log(specificChef);
	const { picture, name, bio, years_of_experience, no_of_recipes, likes } = specificChef;
	return (
		<>
			<div className="bg-white  overflow-hidden w-4/5 mx-auto my-32 flex flex-col md:flex-row justify-between items-center">
				<div className="w-full md:w-2/5">
					<img src={picture} alt={name} className="h-96 w-full object-cover object-top  border rounded-lg" />
				</div>
				<div className="px-6 py-4 w-full md:w-3/6">
					<h3 className="text-xl font-bold mb-2">{name}</h3>
					<p className="text-gray-700 text-sm mb-6">{bio}</p>
					<p className="text-gray-700 text-base mb-2 font-medium"> Years of Experience : {years_of_experience}</p>
					<p className="text-gray-700 text-base mb-2 font-medium">Number of Recipes: {no_of_recipes} </p>
					<p className="text-gray-700 text-base mb-4 font-medium">Likes : {likes}</p>
				</div>
			</div>
		</>
	);
};

export default ChefBanner;
