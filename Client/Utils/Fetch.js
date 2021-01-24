import { getToken, hasExpiredToken } from '../Api/Token';

export async function authFetch(url, params, logout) {
	const token = getToken();

	if (!token) {
		logout();
	} else {
		if (hasExpiredToken(token)) {
			logout();
		} else {
			const paramsTemp = {
				...params,
				headers: {
					...params?.headers,
					Autorizatio: `Bearer ${token}`,
				},
			};

			try {
				const response = await fetch(url, paramsTemp);
				const result = await response.json();
				return result;
			} catch (error) {
				return error;
			}
		}
	}
}
