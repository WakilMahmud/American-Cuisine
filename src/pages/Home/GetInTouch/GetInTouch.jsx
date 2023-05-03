// eslint-disable-next-line no-unused-vars
import React from "react";

const GetInTouch = () => {
	return (
		<div className="w-4/5 mx-auto py-16">
			<h1 className="text-3xl font-bold mb-8 text-center">Get In Touch</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-xl font-bold mb-4">Contact Us</h2>
					<p className="mb-4">
						If you have any questions or feedback about our American cuisine restaurant, please feel free to get in touch with us using the contact
						information below:
					</p>
					<ul className="list-disc ml-8 mb-4">
						<li>Phone: 555-1234</li>
						<li>Email: info@americancuisine.com</li>
						<li>Address: 123 Main Street, Anytown USA</li>
					</ul>

					<h2 className="text-xl font-bold mb-4">Opening Hours</h2>
					<p className="mb-4">We&apos;re open every day from 11am to 9pm.</p>
				</div>

				<div className="rounded-lg overflow-hidden">
					<iframe
						title="map"
						className="w-full h-96"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.140568593337!2d-73.98911968412738!3d40.74147247923215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590b7cf57e27%3A0xf0b7043223c36bb3!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1620042052268!5m2!1sen!2sus"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
