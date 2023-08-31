import { useState } from "react";

const NewsletterSignup = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send the email address to your backend for subscription handling
		console.log("Email submitted:", email);
		// Reset the input field
		setEmail("");
	};

	return (
		<section className="bg-gray-200 py-12">
			<div className="container max-w-7xl mx-auto  px-4">
				<div className="flex flex-col justify-center items-center">
					<div className="w-full text-center">
						<h2 className="text-3xl lg:text-4xl font-semibold mb-2">Subscribe to Newsletter</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Stay updated with our latest recipes, chef showcases, and food tips by subscribing to our newsletter.
						</p>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<form onSubmit={handleSubmit}>
							<div className="mb-4 flex ">
								<input
									className="shadow appearance-none border rounded rounded-e-none w-full h-10 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Your Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>

								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-2 rounded-e focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsletterSignup;
