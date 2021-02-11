import { BASE_PATH, CART } from '../Utils/Constants';
import { size, includes, remove } from 'lodash';
import { toast } from 'react-toastify';

export function getProductsCart() {
	const cart = localStorage.getItem(CART);

	if (!cart) {
		return null;
	} else {
		const products = cart.split(',');
		return products;
	}
}

export function addProductCartApi(product) {
	const cart = getProductsCart();

	if (!cart) {
		localStorage.setItem(CART, product);
		toast.success('Producto añadido');
	} else {
		const productFound = includes(cart, product);
		if (productFound) {
			toast.warning('Este producto ya esta en el carrito');
		} else {
			cart.push(product);
			localStorage.setItem(CART, cart);
			toast.success('Producto añadido');
		}
	}
}
