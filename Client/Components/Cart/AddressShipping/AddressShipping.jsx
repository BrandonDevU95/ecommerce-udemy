import { useState, useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { map, size } from 'lodash';
import Link from 'next/link';
import classNames from 'classnames';
import { getAddressesApi } from '../../../Api/Address';
import useAuth from '../../../Hook/useAuth';

export default function AddressShipping() {
	const [addresses, setAddresses] = useState(null);
	const { auth, logout } = useAuth();

	useEffect(() => {
		(async () => {
			const response = await getAddressesApi(auth.idUser, logout);
			setAddresses(response || []);
		})();
	}, []);

	return (
		<div>
			<h1>Address ....</h1>
		</div>
	);
}
