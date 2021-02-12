import BasicLayout from '../Layouts/BasicLayout';
import { useState, useEffect } from 'react';
import { getLastGamesApi } from '../Api/Game';
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';
import ListGames from '../Components/ListGames/ListGames';
import Seo from '../Components/Seo';

export default function Home() {
	const [games, setGames] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await getLastGamesApi(50);
			if (size(response) > 0) setGames(response);
			else setGames([]);
		})();
	}, []);

	return (
		<BasicLayout className='home'>
			<Seo />
			{!games && <Loader active>Cargando Juegos</Loader>}
			{games && size(games) === 0 && (
				<div>
					<h3>No hay juegos</h3>
				</div>
			)}
			{size(games) > 0 && <ListGames games={games} />}
		</BasicLayout>
	);
}
