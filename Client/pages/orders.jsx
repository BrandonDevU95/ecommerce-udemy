import { useState, useEffect } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { Grid } from 'semantic-ui-react';
import { getOrdersApi } from '../Api/Order';
import useAuth from '../Hook/useAuth';

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
			<div className='orders__block'>
				<div className='title'>Mis pedidos</div>
				<div className='data'>Lista de pedidos</div>
			</div>
		</BasicLayout>
	);
}
