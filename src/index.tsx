import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const domain = process.env.AUTH_CLIENT_DOMAIN || '';
const clientId = process.env.AUTH_CLIENT_ID || '';

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider domain={domain} clientId={clientId}>
				<Route path="/" element={<App />} />
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
);