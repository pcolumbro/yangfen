import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecordBuilder from './features/add-record/record-builder';
import ReportBuilder from './pages/report-builder/report-builder';

function App() {
	return (
		<Routes>
			<Route path="/" element={<ReportBuilder />} />
		</Routes>
	);
};

export default App;
