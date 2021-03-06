import { BASE_PATH } from '../Utils/Constants';

export async function getPlatformsApi() {
	try {
		const url = `${BASE_PATH}/platforms?_sort=position:asc`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}
