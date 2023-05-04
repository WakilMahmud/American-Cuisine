// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
// eslint-disable-next-line react/prop-types
const ChefProfile = ({ chef }) => {
	// console.log(chef);
	// eslint-disable-next-line react/prop-types
	const { id, picture, name, years_of_experience, no_of_recipes, likes } = chef;
	return (
		<>
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<LazyLoad>
					<img src={picture} alt={name} className="h-96 w-full object-cover object-top" />
				</LazyLoad>

				<div className="px-6 py-4">
					<h3 className="text-xl font-bold mb-2">{name}</h3>
					<p className="text-gray-700 text-base mb-2">{years_of_experience} years of experience</p>
					<p className="text-gray-700 text-base mb-2">{no_of_recipes} recipes</p>
					<p className="text-gray-700 text-base mb-4">{likes} likes</p>
					<Link to={`/recipes/${id}`}>
						<button className="px-4 py-2 text-base bg-blue-500 text-white w-full  rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
							View Recipes
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ChefProfile;
