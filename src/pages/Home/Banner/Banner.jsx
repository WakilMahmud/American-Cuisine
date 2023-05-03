// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
	return (
		<div
			className="bg-cover bg-center h-[37rem]"
			style={{ backgroundImage: "url('https://bolt.eu/static/34a06cc4c628b32af6ce934674c15dd2/ac0ad/desktop.png')" }}
		>
			<div className="w-4/5 mx-auto flex items-center h-full">
				<div className="text-white">
					<h1 className="text-5xl font-bold mb-4">Discover American Cuisine</h1>
					<p className="text-xl mb-8">Explore the best dishes from all over the United States.</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
