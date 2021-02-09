import { useState, useEffect } from 'react';
import { getGamesPlatformApi } from '../../Api/Game';
import BasicLayout from '../../Layouts/BasicLayout';
import { useRouter } from 'next/router';
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';
import ListGames from '../../Components/ListGames';

const limitPerPage = 10;

export default function Platform() {
	const [games, setGames] = useState(null);
	const { query } = useRouter();

	useEffect(() => {
		(async () => {
			if (query.platform) {
				const response = await getGamesPlatformApi(query.platform, limitPerPage, 0);
				setGames(response);
			}
		})();
	}, [query]);

	return (
		<BasicLayout className='platform'>
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
