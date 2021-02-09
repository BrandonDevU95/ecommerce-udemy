import { useState, useEffect } from 'react';
import { getGamesPlatformApi, getTotalGamesPlatformApi } from '../../Api/Game';
import BasicLayout from '../../Layouts/BasicLayout';
import { useRouter } from 'next/router';
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';
import ListGames from '../../Components/ListGames';

const limitPerPage = 10;

export default function Platform() {
	const [games, setGames] = useState(null);
	const [totalGames, setTotalGames] = useState(null);
	const { query } = useRouter();

	const getStartItem = () => {
		const currentPage = parseInt(query.page);
		if (!query.page || currentPage === 1) return 0;
		else return currentPage * limitPerPage - limitPerPage;
	};

	useEffect(() => {
		(async () => {
			if (query.platform) {
				const response = await getGamesPlatformApi(query.platform, limitPerPage, 0);
				setGames(response);
			}
		})();
	}, [query]);

	useEffect(() => {
		(async () => {
			const response = await getTotalGamesPlatformApi(query.platform);
			setTotalGames(response);
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
