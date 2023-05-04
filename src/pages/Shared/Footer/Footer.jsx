// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-100 py-8">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-medium text-gray-900 mb-4">About Us</h3>
						<ul className="text-gray-600">
							<li>Our Mission</li>
							<li>Our Story</li>
							<li>Meet the Team</li>
							<li>Careers</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
						<ul className="text-gray-600">
							<li>Phone: 555-1234</li>
							<li>Email: info@americancuisine.com</li>
							<li>Address: 123 Main St, Anytown USA</li>
						</ul>
					</div>
					<div className="flex justify-center  md:col-span-2 lg:col-span-1">
						<h3 className="text-lg font-medium text-gray-900 mr-4">Follow Us</h3>
						<div className="flex gap-6 mt-1">
							<Link to="https://www.facebook.com/">
								<FaFacebookF></FaFacebookF>
							</Link>

							<Link to="https://www.twitter.com/">
								<FaTwitter></FaTwitter>
							</Link>

							<Link to="https://www.instagram.com/">
								<FaInstagram></FaInstagram>
							</Link>
							<Link to="https://www.pinterest.com/">
								<FaPinterestP></FaPinterestP>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8">
					<p className="text-base text-gray-600 text-center">&copy; 2023 American Cuisine. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
