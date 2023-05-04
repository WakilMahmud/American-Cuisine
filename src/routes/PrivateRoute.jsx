// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/Shared/Spinner/Spinner";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	// console.log("user in private route", user);

	if (loading) {
		return <Spinner></Spinner>;
	}
	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
