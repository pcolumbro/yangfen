import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecordBuilder from './features/add-record/record-builder';
import Profile from './pages/profile/profile';
import ReportBuilder from './pages/report-builder/report-builder';

function App() {
	return (
		<Routes>
			<Route path="/" element={<ReportBuilder />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	);
};

export default App;
