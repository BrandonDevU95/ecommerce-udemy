import { useState, useEffect } from 'react';
import { size, forEach } from 'lodash';
import BasicLayout from '../Layouts/BasicLayout';
import { getFavoriteApi } from '../Api/Favorite';
import useAuth from '../Hook/useAuth';

export default function wishlist() {
	const [games, setGames] = useState(null);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await getFavoriteApi(auth.idUser, logout);
			setGames(response);
		})();
	}, []);

	return (
		<BasicLayout className='wishlist'>
			<div className='wishlist__block'>
				<div className='title'>Lista de Deseos</div>
				<div className='data'>
					<p>Lista...</p>
				</div>
			</div>
		</BasicLayout>
	);
}
