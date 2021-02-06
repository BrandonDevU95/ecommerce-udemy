import { BASE_PATH } from '../Utils/Constants';
import { authFetch } from '../Utils/Fetch';

export async function createAddressApi(address, logout, idUser) {
	try {
		const url = `${BASE_PATH}/addresses?users_permissions_user=${idUser}`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(address),
		};
		const result = await authFetch(url, params, logout);
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function getAddressesApi(idUser, logout) {
	try {
		const url = `${BASE_PATH}/addresses?users_permissions_user=${idUser}`;
		const result = await authFetch(url, null, logout);
		if (result.statusCode !== 500) throw 'Error del Servidor';
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}