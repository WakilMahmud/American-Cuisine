import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import loadData from "../utilities/loadData";
import PrivateRoute from "./PrivateRoute";

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
				element: (
					<PrivateRoute>
						<ChefRecipes></ChefRecipes>
					</PrivateRoute>
				),
				loader: ({ params }) => loadData(params.id),
			},
		],
	},
]);

export default router;
