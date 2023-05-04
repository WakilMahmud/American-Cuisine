// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
	return (
		<>
			<Toaster></Toaster>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
