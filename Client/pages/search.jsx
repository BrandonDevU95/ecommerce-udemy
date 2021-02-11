import { useState, useEffect } from 'react';
import BasicLayout from '../Layouts/BasicLayout';

export default function search() {
	useEffect(() => {
		document.getElementById('search-game').focus();
	}, []);

	return (
		<BasicLayout className='search'>
			<h1>Search...</h1>
		</BasicLayout>
	);
}
