// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
	return (
		<div
			className="bg-cover bg-right md:bg-center  h-96 md:h-[37rem]"
			style={{
				backgroundImage:
					"url('https://images.squarespace-cdn.com/content/v1/5a93d7cd12b13f8318462b89/1537090136692-U6ZC75NR7MT372S6QMWW/image-asset.jpeg?format=1500w')",
			}}
		>
			<div className="flex flex-col justify-center  h-full max-w-7xl mx-auto  px-4">
				<h1 className="text-lg md:text-5xl font-bold mb-4">Discover American Cuisine</h1>
				<p className="text-sm lg:text-2xl">Explore the best dishes from all over the United States.</p>
			</div>
		</div>
	);
};

export default Banner;
