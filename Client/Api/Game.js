import { BASE_PATH } from '../Utils/Constants';

export async function getLastGamesApi(limit) {
	try {
		const limitItems = `_limit=${limit}`;
		const shortItem = `_sort=createdAt:desc`;
		const url = `${BASE_PATH}/games?${limitItems}&${shortItem}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function getGamesPlatformApi(platform, limit, start) {
	try {
		const limitItems = `_limit=${limit}`;
		const shortItems = `_sort=createdAt:desc`;
		const startItems = `_start=${start}`;
		const url = `${BASE_PATH}/games?platform.url=${platform}&${limitItems}&${shortItems}&${startItems}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}
