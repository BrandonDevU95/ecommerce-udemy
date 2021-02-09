import { BASE_PATH } from '../Utils/Constants';

export async function getLastGamesApi(limit) {
	try {
		const limitItems = `_limit=${limit}`;
		const shortItem = `_sort=createAt:desc`;
		const url = `${BASE_PATH}/games?${limitItems}&${shortItem}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}