import { BASE_PATH, CART } from '../Utils/Constants';

export function getProductsCart() {
	const cart = localStorage(CART);

	if (!cart) {
		return null;
	} else {
		const products = cart.split(',');
		return products;
	}
}
