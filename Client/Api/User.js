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
		return result;
	} catch (error) {
		return null;
	}
}

export async function loginApi(formData) {
	try {
		const url = `${BASE_PATH}/auth/local`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};
		const response = await fetch(url, params);
		const result = await response.json();
		return result;
	} catch (error) {}
}

export async function resetPasswordApi() {
	try {
		const url = `${BASE_PATH}/auth/forgot-password`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		};
		const response = await fetch(url, params);
		const result = await response.json();
		return result;
	} catch (error) {
		return null;
	}
}
