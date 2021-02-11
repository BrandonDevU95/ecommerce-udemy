import { useState, useEffect } from 'react';
import { size, forEach } from 'lodash';
import BasicLayout from '../Layouts/BasicLayout';
import { getFavoriteApi } from '../Api/Favorite';
import useAuth from '../Hook/useAuth';
import ListGames from '../Components/ListGames';
import { Loader } from 'semantic-ui-react';

export default function wishlist() {
	const [games, setGames] = useState(null);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await getFavoriteApi(auth.idUser, logout);
			if (size(response) > 0) {
				const gameList = [];
				forEach(response, (data) => {
					gameList.push(data.game);
				});
				setGames(gameList);
			} else {
				setGames([]);
			}
		})();
	}, []);

	return (
		<BasicLayout className='wishlist'>
			<div className='wishlist__block'>
				<div className='title'>Lista de Deseos</div>
				<div className='data'>
					{!games && <Loader active>Cargando Juegos</Loader>}
					{games && size(games) === 0 && (
						<div className='data__not-found'>
							<h3>No hay juegos en Wishlist</h3>
						</div>
					)}
					{size(games) > 0 && <ListGames games={games} />}
				</div>
			</div>
		</BasicLayout>
	);
}
