import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { map } from 'lodash';
import useWindowSize from '../../Hook/useWindowSize';
import { breakUpSm, breakUpMd, breakUpLg } from '../../Utils/Breakpoints';

export default function ListGames({ games }) {
	const { width } = useWindowSize();

	const getColumnsRender = () => {
		switch (true) {
			case width > breakUpLg:
				return 5;
			case width > breakUpMd:
				return 3;
			case width > breakUpSm:
				return 2;
			default:
				return 1;
		}
	};

	return (
		<div className='list-games'>
			<Grid>
				<Grid.Row columns={getColumnsRender()}>
					{map(games, (game) => (
						<Game key={game.url} game={game} />
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
}

function Game({ game }) {
	return (
		<Grid.Column className='list-games__game'>
			<Link href={`/${game.url}`}>
				<a>
					<div className='list-games__game-poster'>
						<Image src={game.poster.url} alt={game.title} />
						<div className='list-games__game-poster-info'>
							{game.discount ? <span className='discount'>-{game.discount}%</span> : <span />}
							<span className='price'>${game.price}</span>
						</div>
					</div>
					<h2>{game.title}</h2>
				</a>
			</Link>
		</Grid.Column>
	);
}
