// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [isClick, setIsClick] = useState(true);
	return (
		<nav className="container shadow-lg sticky top-0">
			<div className="w-4/5 mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link to="/" className="font-extrabold text-xl">
						American Cuisine
					</Link>
					{/* Hamburger Menu */}
					<button className="flex md:hidden focus:outline-none" onClick={() => setIsClick(!isClick)}>
						<svg className="h-6 w-6 fill-current " viewBox="0 0 24 24">
							<path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
						</svg>
					</button>

					<ul className={`${isClick ? "hidden" : ""} font-semibold flex flex-col md:flex md:flex-row md:items-center md:gap-8`}>
						<NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
							Home
						</NavLink>
						<NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
							Blog
						</NavLink>
						<Link to="/login">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-xl">Login</button>
						</Link>
						{/* User Profile Pic */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
