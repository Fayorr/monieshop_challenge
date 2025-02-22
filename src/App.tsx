// import React from 'react';
import './App.css';
import Table from './components/Table';

function App() {
	return (
		<>
			<h1>Moniepoint Challenge</h1>
			<p>Click here to upload text file</p>
			<br />
			<label htmlFor='file'>Upload File</label>
			<br />
			<input
				type='file'
				name='file'
				id='file'
			/>
			<br />
			<Table />
		</>
	);
}

export default App;
