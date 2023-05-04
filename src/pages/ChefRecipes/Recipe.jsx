/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
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
					<p className="mt-4 text-gray-600 font-medium">
						Ingredients:&nbsp;
						{ingredients.map((i, idx) => {
							// eslint-disable-next-line react/jsx-key
							return (
								<span key={idx} className="text-base font-light text-gray-500 ">
									{i}. &nbsp;
								</span>
							);
						})}
					</p>

					<p className="mt-4 text-gray-600">
						<span className="text-gray-600 font-medium">Method: </span>
						{method}
					</p>
					<div className="mt-4 flex items-center text-sm text-gray-600 ">
						<Rating style={{ maxWidth: 180 }} value={Math.round(rating)} readOnly />

						<span className="text-orange-500 font-bold text-xl ml-4">{rating}</span>

						{favorite ? (
							<button className="ml-32" disabled onClick={handleFavoriteButton}>
								<FaHeart fill="red" size="2rem"></FaHeart>
							</button>
						) : (
							<button className="ml-32" onClick={handleFavoriteButton}>
								<FaRegHeart size="2rem"></FaRegHeart>
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Recipe;
