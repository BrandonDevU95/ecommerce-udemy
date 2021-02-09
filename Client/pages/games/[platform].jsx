import { useState, useEffect } from 'react';
import { getGamesPlatformApi } from '../../Api/Game';
import BasicLayout from '../../Layouts/BasicLayout';
import { useRouter } from 'next/router';

const limitPerPage = 10;

export default function Platform() {
	const [games, setGames] = useState(null);
	const { query } = useRouter();

	useEffect(() => {
		(async () => {
			const response = await getGamesPlatformApi(query.platform, limitPerPage, 0);
			setGames(response);
		})();
	}, [query]);

	return (
		<BasicLayout className='platform'>
			<h1>Estamos en la plataforma: {query.platform} </h1>
		</BasicLayout>
	);
}
