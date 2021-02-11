import React from 'react';
import BasicLayout from '../Layouts/BasicLayout';

export default function wishlist() {
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
