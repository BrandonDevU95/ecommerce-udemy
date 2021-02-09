import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../Layouts/BasicLayout';
import { getGameByUrlApi } from '../Api/Game';

export default function Game() {
	const [game, setGame] = useState(null);
	const { query } = useRouter();

	useEffect(() => {
		(async () => {
			const response = await getGameByUrlApi(query.game);
			setGame(response);
		})();
	}, []);

	return (
		<BasicLayout className='game'>
			<h1>Juegos...</h1>
		</BasicLayout>
	);
}
