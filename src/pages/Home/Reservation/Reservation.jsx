const Reservation = () => {
	return (
		<section className="bg-gray-200 py-12">
			<div className="container max-w-7xl mx-auto  px-4">
				<h2 className="text-4xl font-bold mb-12 text-center ">Reservation</h2>
				<div className="flex flex-wrap items-center -mx-4">
					<div className="w-full lg:w-1/2 px-4">
						<h2 className="text-3xl font-semibold mb-4 text-center ">Book Your Table</h2>
						<p className="text-gray-700 leading-relaxed text-center">
							We&apos;d love to have you join us for a delicious meal. Please use the form below to make a reservation.
						</p>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<form>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
										Your Name
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="name"
										type="text"
										placeholder="Your Name"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
										Email
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email Address"
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
										Date
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="date"
										type="date"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
										Time
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="time"
										type="time"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
										Number of Guests
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="guests"
										type="number"
										min="1"
									/>
								</div>
								<div className="mb-6 text-center">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
										type="button"
									>
										Make Reservation
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
