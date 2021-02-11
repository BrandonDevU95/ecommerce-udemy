import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';
import { searchGamesApi } from '../Api/Game';
import BasicLayout from '../Layouts/BasicLayout';
import ListGames from '../Components/ListGames';

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
			{!games && <Loader active>Buscando Juegos</Loader>}
			{games && size(games) === 0 && (
				<div>
					<h3>No se encontraron juegos</h3>
				</div>
			)}
			{size(games) > 0 && <ListGames games={games} />}
		</BasicLayout>
	);
}
