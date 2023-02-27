import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { router } from './routes/routes';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const domain = process.env.REACT_APP_CLIENT_DOMAIN || '';
const clientId = process.env.REACT_APP_CLIENT_ID || '';

console.log('domain: ', domain);
console.log('clientId: ', clientId);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
			{/* <Auth0Provider
				domain={domain}
				clientId={clientId}
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
			>
				<App/>
			</Auth0Provider>
		</RouterProvider> */}
	</React.StrictMode>
);