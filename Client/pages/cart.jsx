import { useState, useEffect } from 'react';
import { getGameByUrlApi } from '../Api/Game';
import useCart from '../Hook/useCart';
import BasicLayout from '../Layouts/BasicLayout';

export default function cart() {
	const { getProductsCart } = useCart();
	const products = getProductsCart();

	return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
	return (
		<BasicLayout className='empty-cart'>
			<h2>No hay productos</h2>
		</BasicLayout>
	);
}

function FullCart({ products }) {
	const [productsData, setProductsData] = useState(null);

	console.log(productsData);

	useEffect(() => {
		(async () => {
			const productsTemp = [];
			for await (const product of products) {
				const data = await getGameByUrlApi(product);
				productsTemp.push(data);
			}
			setProductsData(productsTemp);
		})();
	}, []);
	return (
		<BasicLayout className='cart'>
			<h1>Carrito...</h1>
		</BasicLayout>
	);
}
