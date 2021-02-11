import { useState, useEffect, Fragment } from 'react';
import { Grid, Image, Icon, Button } from 'semantic-ui-react';
import { isFavoriteApi } from '../../../Api/Favorite';
import { size } from 'lodash';
import classNames from 'classnames';
import useAuth from '../../../Hook/useAuth';

export default function HeaderGame({ game }) {
	return (
		<Grid className='header-game'>
			<Grid.Column mobile={16} tablet={6} computer={5}>
				<Image src={game.poster.url} alt={game.title} fluid />
			</Grid.Column>
			<Grid.Column mobile={16} tablet={10} computer={11}>
				<Info game={game} />
			</Grid.Column>
		</Grid>
	);
}

function Info({ game }) {
	const [isFavorite, setIsFavorite] = useState(false);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await isFavoriteApi(auth.idUser, game.id, logout);
			console.log(response);
			if (size(response) > 0) setIsFavorite(response);
			else setIsFavorite(false);
		})();
	}, [game]);

	const addFavorite = () => {
		console.log('Añadir');
	};

	const removeFavorite = () => {
		console.log('Eliminando');
	};

	return (
		<Fragment>
			<div className='header-game__title'>
				{game.title}
				<Icon
					name={isFavorite ? 'heart' : 'heart outline'}
					className={classNames({
						like: isFavorite,
					})}
					link
					onClick={isFavorite ? removeFavorite : addFavorite}
				/>
			</div>
			<div className='header-game__delivery'>Entrega en 24/48 Hrs</div>
			<div className='header-game__summary' dangerouslySetInnerHTML={{ __html: game.summary }} />
			<div className='header-game__buy'>
				<div className='header-game__buy-price'>
					<p>Precio de venta al publico: ${game.price}</p>
					<div className='header-game__buy-price-actions'>
						<p>-{game.discount}%</p>
						<p>${game.price - Math.floor(game.price * game.discount) / 100}</p>
					</div>
				</div>
				<Button className='header-game__buy-btn'>Comprar</Button>
			</div>
		</Fragment>
	);
}
