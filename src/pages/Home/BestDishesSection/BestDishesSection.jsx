// eslint-disable-next-line no-unused-vars
import React from "react";

const BestDishesSection = () => {
	return (
		<section className="bg-gray-200 py-16">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">Best American Dishes</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white shadow-md rounded-md p-4">
						<img
							src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Dish 1"
							className="w-full h-64 rounded-md mb-4"
						/>
						<h3 className="text-xl font-bold mb-2">Hamburger</h3>
						<p className="text-gray-700 mb-4">The classic American dish that needs no introduction.</p>
					</div>
					<div className="bg-white shadow-md rounded-md p-4">
						<img
							src="https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Dish 2"
							className="w-full h-64 rounded-md mb-4"
						/>
						<h3 className="text-xl font-bold mb-2">Mac and Cheese</h3>
						<p className="text-gray-700 mb-4">A creamy, cheesy dish that is a favorite of kids and adults alike.</p>
					</div>
					<div className="bg-white shadow-md rounded-md p-4">
						<img
							src="https://images.unsplash.com/photo-1593030668930-8130abedd2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fEJhcmJlY3VlJTIwUmlic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							alt="Dish 3"
							className="w-full h-64 rounded-md mb-4"
						/>
						<h3 className="text-xl font-bold mb-2">Barbecue Ribs</h3>
						<p className="text-gray-700 mb-4">Tender, fall-off-the-bone ribs with a smoky, sweet sauce.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BestDishesSection;
