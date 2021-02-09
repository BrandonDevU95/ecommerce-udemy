import BasicLayout from '../Layouts/BasicLayout';
import { useState, useEffect } from 'react';
import { getLastGamesApi } from '../Api/Game';
import { size } from 'lodash';

export default function Home() {
	const [games, setGames] = useState(null);
	console.log(games);

	useEffect(() => {
		(async () => {
			const response = await getLastGamesApi(50);
			if (size(response) > 0) setGames(response);
			else setGames([]);
		})();
	}, []);
	return (
		<BasicLayout>
			<h1>Estamos en Home</h1>
		</BasicLayout>
	);
}
