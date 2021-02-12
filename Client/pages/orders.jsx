import { useState, useEffect } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { Grid } from 'semantic-ui-react';
import { map, size } from 'lodash';
import { getOrdersApi } from '../Api/Order';
import useAuth from '../Hook/useAuth';
import Order from '../Components/Order';
import Seo from '../Components/Seo';

export default function orders() {
	const [orders, setOrders] = useState(null);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await getOrdersApi(auth.idUser, logout);
			setOrders(response || []);
		})();
	}, []);

	return (
		<BasicLayout className='orders'>
			<Seo title='Mis pedidos' />
			<div className='orders__block'>
				<div className='title'>Mis pedidos</div>
				<div className='data'>
					{size(orders) === 0 ? (
						<h2 style={{ textAlign: 'center' }}>No hay Pedidos</h2>
					) : (
						<OrderList orders={orders} />
					)}
				</div>
			</div>
		</BasicLayout>
	);
}

function OrderList({ orders }) {
	return (
		<Grid>
			{map(orders, (order) => (
				<Grid.Column key={order.id} mobile='16' tablet='6' computer='8'>
					<Order order={order} />
				</Grid.Column>
			))}
		</Grid>
	);
}
