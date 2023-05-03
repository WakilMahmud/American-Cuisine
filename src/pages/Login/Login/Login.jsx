// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-2xl font-bold mb-4">Login</h2>
			<form className="w-full max-w-md">
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
					/>
				</div>
				<div className="w-full text-center">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 w-64 rounded focus:outline-none focus:shadow-outline"
					>
						Login
					</button>
				</div>
			</form>
			<div className="mt-4">
				<p className="text-gray-700">Or sign in with:</p>
				<div className="flex flex-col mt-2">
					<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 w-64">Google</button>
					<button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-64">GitHub</button>
				</div>
			</div>
			<div className="mt-4">
				<p className="text-gray-700">
					Don&apos;t have an account?
					<Link to="/register" className="text-blue-500 underline hover:text-blue-700">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
