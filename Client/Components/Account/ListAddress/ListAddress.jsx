import { useState, useEffect } from 'react';
import { getAddressesApi } from '../../../Api/Address';
import useAuth from '../../../Hook/useAuth';

export default function ListAddress() {
	const [addresses, setAddresses] = useState(null);
	const { auth, logout } = useAuth();

	console.log(addresses);

	useEffect(() => {
		(async () => {
			const response = await getAddressesApi(auth.idUser, logout);
			setAddresses(response || []);
		})();
	}, []);

	return (
		<div>
			<h1>List Addresses...</h1>
		</div>
	);
}
