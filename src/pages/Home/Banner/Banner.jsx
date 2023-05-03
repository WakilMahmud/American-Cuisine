// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
	return (
		<div
			className="bg-cover bg-right md:bg-center  h-96 md:h-[37rem]"
			style={{ backgroundImage: "url('https://bolt.eu/static/34a06cc4c628b32af6ce934674c15dd2/ac0ad/desktop.png')" }}
		>
			<div className="flex flex-col justify-center  w-4/5 mx-auto h-full">
				<h1 className="text-xl md:text-5xl font-bold mb-4">Discover American Cuisine</h1>
				<p className="text-base md:text-lg mb-8">Explore the best dishes from all over the United States.</p>
			</div>
		</div>
	);
};

export default Banner;
