/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const Recipe = ({ recipe }) => {
	const [favorite, setFavorite] = useState(false);
	// console.log(recipe);

	// eslint-disable-next-line react/prop-types
	const { meal_pic, name, ingredients, method, rating } = recipe;

	const handleFavoriteButton = () => {
		toast.success("The Recipe is in your favorite list");
		setFavorite(!favorite);
	};

	return (
		<>
			<div className="w-4/5 mx-auto bg-white overflow-hidden shadow rounded-lg ">
				<div className="h-64 w-96 p-4 ">
					<img className="w-full h-full object-cover rounded-lg" src={meal_pic} alt={name} />
				</div>
				<div className="px-4 py-4">
					<h3 className="text-lg font-medium text-gray-900">{name}</h3>
					<p className="mt-4 text-gray-600 font-medium">Ingredients:</p>
					<ul>
						{ingredients.map((i, idx) => {
							// eslint-disable-next-line react/jsx-key
							return (
								<li key={idx} className="text-base text-gray-500 relative left-10 ">
									{i}
								</li>
							);
						})}
					</ul>

					<p className="mt-4 text-gray-600">
						<span className="text-gray-600 font-medium">Method: </span>
						{method}
					</p>
					<div className="mt-4 flex items-center text-sm text-gray-600 ">
						<svg className="h-6 w-6 fill-current text-yellow-500 mr-1" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 15.585l-5.16 3.159a1 1 0 01-1.47-1.054l1.28-5.62-4.28-3.708a1 1 0 01.554-1.706l5.94-.51L9.36 1.98a1 1 0 011.88 0l2.792 5.308 5.94.51a1 1 0 01.554 1.706l-4.28 3.708 1.28 5.62a1 1 0 01-1.47 1.054L10 15.585z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-gray-600 font-medium">
							Rating: <span className="text-orange-600 font-bold">{rating}</span>
						</span>

						{favorite ? (
							<button className="ml-12" disabled onClick={handleFavoriteButton}>
								<FaHeart fill="red"></FaHeart>
							</button>
						) : (
							<button className="ml-12" onClick={handleFavoriteButton}>
								<FaRegHeart></FaRegHeart>
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Recipe;
