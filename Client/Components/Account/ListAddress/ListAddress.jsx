import { useState, useEffect } from 'react';
import { getAddressesApi } from '../../../Api/Address';
import useAuth from '../../../Hook/useAuth';
import { map, size } from 'lodash';
import { Grid, Button } from 'semantic-ui-react';

export default function ListAddress({ reloadAddresses, setReloadAddresses }) {
	const [addresses, setAddresses] = useState(null);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await getAddressesApi(auth.idUser, logout);
			setAddresses(response || []);
			setReloadAddresses(false);
		})();
	}, [reloadAddresses]);

	if (!addresses) return null;

	return (
		<div className='list-address'>
			{size(addresses) === 0 ? (
				<h3>No hay direcciones</h3>
			) : (
				<Grid>
					{map(addresses, (address) => (
						<Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
							<Address address={address} />
						</Grid.Column>
					))}
				</Grid>
			)}
		</div>
	);
}

function Address({ address }) {
	return (
		<div className='address'>
			<p> {address.title} </p>
			<p> {address.name} </p>
			<p> {address.address} </p>
			<p>
				{address.state}, {address.city} {address.postalCode}
			</p>
			<p> {address.phone} </p>
			<div className='actions'>
				<Button primary>Editar</Button>
				<Button>Eliminar</Button>
			</div>
		</div>
	);
}
