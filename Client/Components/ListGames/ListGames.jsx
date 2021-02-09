import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { map } from 'lodash';

export default function ListGames({ games }) {
	return (
		<div className='list-games'>
			<Grid>
				<Grid.Row columns={5}>
					{map(games, (game) => (
						<Game key={game.url} game={game} />
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
}

function Game({ game }) {
	console.log(game);
	return (
		<Grid.Column className='list-game__game'>
			<Link href={`/${game.url}`}>
				<a>
					<div className='list-game__game-poster'>
						<Image src={game.poster.url} alt={game.title} />
					</div>
				</a>
			</Link>
		</Grid.Column>
	);
}
