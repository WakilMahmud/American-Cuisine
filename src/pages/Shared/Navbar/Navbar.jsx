// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [isClick, setIsClick] = useState(true);
	return (
		<nav className="container shadow-lg">
			<div className="w-4/5 mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link to="/" className="font-bold text-xl">
						Cuisine Website
					</Link>
					{/* Hamburger Menu */}
					<button className="flex md:hidden focus:outline-none" onClick={() => setIsClick(!isClick)}>
						<svg className="h-6 w-6 fill-current " viewBox="0 0 24 24">
							<path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
						</svg>
					</button>

					<ul className={`${isClick ? "hidden" : ""} flex flex-col md:flex md:flex-row md:items-center md:gap-5`}>
						<NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
							Home
						</NavLink>
						<NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
							Blog
						</NavLink>
						<NavLink to="/login" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
							Login
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
