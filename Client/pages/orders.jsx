import React from 'react';
import BasicLayout from '../Layouts/BasicLayout';

export default function orders() {
	return (
		<BasicLayout className='orders'>
			<div className='orders__block'>
				<div className='title'>Mis pedidos</div>
				<div className='data'>Lista de pedidos</div>
			</div>
		</BasicLayout>
	);
}
