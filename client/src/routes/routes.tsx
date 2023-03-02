import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile/profile";
import ReportBuilder from "../pages/report-builder/report-builder";

export const router = createBrowserRouter([
	{	
		path: "/", 
		element: <App />,
		children: [
			{ path: "/", element: <ReportBuilder /> },
			{ path: "/profile", element: <Profile/>  },
		],
	},
]);