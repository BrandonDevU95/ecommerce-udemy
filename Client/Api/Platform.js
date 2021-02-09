import { BASE_PATH } from '../Utils/Constants';
import { authFetch } from '../Utils/Fetch';

export async function getPlatformsApi() {
	try {
		const url = `${BASE_PATH}/platforms`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}
