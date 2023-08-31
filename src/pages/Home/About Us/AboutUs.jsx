const AboutUs = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="container max-w-7xl mx-auto  px-4">
				<h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
				<div className="flex flex-wrap items-center -mx-4">
					<div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
						<p className="text-gray-700 leading-relaxed">
							Welcome to American Cuisine, where we are passionate about celebrating the rich and diverse flavors of American cooking.
						</p>
						<br />
						<p className="text-gray-700 leading-relaxed mt-2">
							Our mission is to bring you the best recipes from top chefs across the United States, from classic comfort foods to modern culinary
							creations.
						</p>
						<br />
						<p className="text-gray-700 leading-relaxed mt-2">
							We believe in the power of food to bring people together, and our goal is to make cooking and enjoying American cuisine accessible to
							everyone.
						</p>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<img
							src="https://media.istockphoto.com/id/462581255/photo/team-of-chefs-giving-thumbs-up.jpg?s=612x612&w=0&k=20&c=C-FII1ep-3ZoTHtsk20IC3drhDU4R_W7QfrUwGrpc3Y="
							alt="Team"
							className="rounded-lg shadow-lg object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
