import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<Container>
			<Link to="/">Home</Link>
			{isAuthenticated && (
			<div>
				<img src={user?.picture} alt={user?.name} />
				<h2>{user?.name}</h2>
				<p>{user?.email}</p>
			</div>
			)}
		</Container>
	);
};
export default Profile;
