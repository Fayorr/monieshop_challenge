// import React from 'react';
import './App.css';
import Display from './components/Display';
import Table from './components/Table';

function App() {
	return (
		<>
			<h1>Moniepoint Challenge</h1>
			<p>This is for file 2025-01-01</p>
			{/* <label htmlFor='file'>Upload File</label>
			<br />
			<input
				type='file'
				name='file'
				id='file'
			/> */}
			<Display />
			{/* <p>A Plus</p> */}
			<Table />
		</>
	);
}

export default App;
