import { useState, useEffect } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { searchGamesApi } from '../Api/Game';
import { useRouter } from 'next/router';
import { size } from 'lodash';

export default function search() {
	const [games, setGames] = useState(null);
	const { query } = useRouter();

	useEffect(() => {
		document.getElementById('search-game').focus();
	}, []);

	useEffect(() => {
		(async () => {
			if (size(query.query) > 0) {
				const response = await searchGamesApi(query.query);
				if (size(response) > 0) setGames(response);
				else setGames([]);
			} else {
				setGames([]);
			}
		})();
	}, [query]);

	return (
		<BasicLayout className='search'>
			<h1>Search...</h1>
		</BasicLayout>
	);
}
