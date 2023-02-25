import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckAuthButton = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<button
			style={{ marginBottom: "30px" }}
			onClick={() => console.log('isAuthenticated: ', isAuthenticated)}
		>
			Check Auth
		</button>
	);
};
export default CheckAuthButton;
