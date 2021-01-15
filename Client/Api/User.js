import { BASE_PATH } from '../Utils/Constants';

export async function registerApi(formData) {
	try {
		const url = `${BASE_PATH}/auth/local/register`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};
		const response = await fetch(url, params);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		return null;
	}
}
