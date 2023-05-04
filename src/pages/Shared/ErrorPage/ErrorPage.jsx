// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../../../assets/Error.json.json";

const ErrorPage = () => {
	const { error, statusText } = useRouteError();
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<Lottie animationData={Error} loop={true} />;
				<div className="max-w-md text-center">
					<p className="text-2xl font-semibold md:text-3xl mb-8">{error?.message}</p>
					<p className="text-2xl font-semibold md:text-3xl mb-8 text-red-500 uppercase">{statusText}</p>
					<Link to="/" className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900">
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
