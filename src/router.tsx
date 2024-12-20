import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

export const mainRouter = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "*",
				element: <h1 className="text-4xl text-center my-12">Error 404</h1>,
			},
		],
	},
]);
