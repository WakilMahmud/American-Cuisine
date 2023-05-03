import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("https://chef-server-wakilmahmud.vercel.app/"),
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/recipes/:id",
				element: <ChefRecipes></ChefRecipes>,
			},
		],
	},
]);

export default router;
