import { BASE_PATH } from '../Utils/Constants';
import { authFetch } from '../Utils/Fetch';

export async function isFavoriteApi(idUser, idGame, logout) {
	try {
		const url = `${BASE_PATH}/favorites?users_permissions_user=${idUser}&game=${idGame}`;
		return await authFetch(url, null, logout);
	} catch (error) {
		console.log(error);
		return null;
	}
}
