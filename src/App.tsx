import { Auth0Provider } from '@auth0/auth0-react';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import RecordBuilder from './features/add-record/record-builder';
import Profile from './pages/profile/profile';
import ReportBuilder from './pages/report-builder/report-builder';

function App() {

	const domain = process.env.REACT_APP_CLIENT_DOMAIN || "";
	const clientId = process.env.REACT_APP_CLIENT_ID || "";

	console.log("domain: ", domain);
	console.log("clientId: ", clientId);

	return (
		// <Routes>
		// 	<Route path="/" element={<ReportBuilder />} />
		// 	<Route path='/profile' element={<Profile />} />
		// </Routes>
		<Auth0Provider
				domain={domain}
				clientId={clientId}
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
		>
			<Outlet />
		</Auth0Provider>
	);
};

export default App;
