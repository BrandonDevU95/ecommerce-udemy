import { useState, useEffect } from 'react';
import { getAddressesApi } from '../../../Api/Address';
import useAuth from '../../../Hook/useAuth';

export default function ListAddress() {
	const { auth, logout } = useAuth();
	const [addresses, setAddresses] = useState(null);

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
