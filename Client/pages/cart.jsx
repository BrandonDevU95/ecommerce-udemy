import { useState, useEffect } from 'react';
import { getGameByUrlApi } from '../Api/Game';
import AddressShipping from '../Components/Cart/AddressShipping';
import Payment from '../Components/Cart/Payment';
import SummaryCart from '../Components/Cart/SummaryCart/SummaryCart';
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
	const [reloadCart, setReloadCart] = useState(false);
	const [address, setAddress] = useState(null);

	useEffect(() => {
		(async () => {
			const productsTemp = [];
			for await (const product of products) {
				const data = await getGameByUrlApi(product);
				productsTemp.push(data);
			}
			setProductsData(productsTemp);
		})();
		setReloadCart(false);
	}, [reloadCart]);

	return (
		<BasicLayout className='cart'>
			<SummaryCart products={productsData} reloadCart={reloadCart} setReloadCart={setReloadCart} />
			<AddressShipping setAddress={setAddress} />
			{address && <Payment products={productsData} address={address} />}
		</BasicLayout>
	);
}
