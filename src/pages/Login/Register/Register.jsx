// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const { createUser } = useContext(AuthContext);

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name, photo, email, password);

		// Form validation
		if (email === "") {
			setEmailError("Please enter your email address.");
			return;
		} else {
			setEmailError("");
		}
		if (password === "") {
			setPasswordError("Please enter your password.");
			return;
		} else if (password.length < 6) {
			setPasswordError("Password must be at least 6 characters.");
			return;
		} else {
			setPasswordError("");
		}

		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
				toast.success("Successfully Registered!");
			})
			.catch((error) => {
				console.log(error);
				// toast.error(error.message);
				toast.error("Email is already in use!");
			});

		// updateProfile(auth.currentUser, {
		// 	displayName: "Jane Q. User",
		// 	photoURL: "https://example.com/jane-q-user/profile.jpg",
		// })
		// 	.then(() => {
		// 		// Profile updated!
		// 		// ...
		// 	})
		// 	.catch((error) => {
		// 		// An error occurred
		// 		// ...
		// 	});

		form.name.value = "";
		form.email.value = "";
		form.password.value = "";
		form.photo.value = "";
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen ">
			<h2 className="text-2xl font-bold mb-4">Register</h2>
			<form className="w-full max-w-md" onSubmit={handleRegister}>
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
					{emailError && <p className="text-red-500 text-xs italic mt-2">{emailError}</p>}
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
					{passwordError && <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>}

					<input
						type="password"
						id="password"
						name="password"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
