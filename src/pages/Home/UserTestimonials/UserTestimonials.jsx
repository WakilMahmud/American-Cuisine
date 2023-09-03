const UserTestimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "John Doe",
			text: "Amazing website! I've discovered so many delicious recipes here.",
			image:
				"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
		},
		{
			id: 2,
			name: "Jane Smith",
			text: "The chefs featured on this website are truly talented. I'm a fan!",
			image:
				"https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		},
		{
			id: 3,
			name: "Alice Johnson",
			text: "The recipes are easy to follow, and the results are always fantastic.",
			image:
				"https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		},
	];

	return (
		<section className="bg-sky-100 py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center">Testimonials</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
							<p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
							<img src={testimonial.image} alt={testimonial.name} className="mx-auto w-24 h-24 object-cover rounded-full mb-4" />
							<p className="text-blue-500 font-semibold">{testimonial.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default UserTestimonials;
