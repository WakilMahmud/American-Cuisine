// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen ">
			<h2 className="text-2xl font-bold mb-4">Register</h2>
			<form className="w-full max-w-md">
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700 font-bold mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700 font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
						Photo URL
					</label>
					<input
						type="text"
						id="photo"
						name="photo"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="w-full text-center mt-8">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 focus:outline-none focus:shadow-outline"
					>
						Register
					</button>
				</div>
			</form>
			<div className="mt-4">
				<p className="text-gray-700">
					Already have an account?
					<Link to="/login" className="text-blue-500 underline hover:text-blue-700">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
