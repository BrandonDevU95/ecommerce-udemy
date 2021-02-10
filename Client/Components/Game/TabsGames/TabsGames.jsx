import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsGames({ game }) {
	const panes = [
		{
			menuItem: 'Informacion',
			render: () => (
				<Tab.Pane>
					<h1>Info Game</h1>
				</Tab.Pane>
			),
		},
	];

	return <Tab className='tabs-game' panes={panes} />;
}
