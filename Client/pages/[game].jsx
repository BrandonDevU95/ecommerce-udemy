import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../Layouts/BasicLayout';
import { getGameByUrlApi } from '../Api/Game';
import HeaderGame from '../Components/Game/HeaderGame';
import TabsGames from '../Components/Game/TabsGames';

export default function Game() {
	const [game, setGame] = useState(null);
	const { query } = useRouter();

	useEffect(() => {
		(async () => {
			const response = await getGameByUrlApi(query.game);
			setGame(response);
		})();
	}, []);

	if (!game) return null;

	return (
		<BasicLayout className='game'>
			<HeaderGame game={game} />
			<TabsGames game={game} />
		</BasicLayout>
	);
}
