import { useMemo, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import CartContext from '../Context/CartContext';
import { setToken, getToken, removeToken } from '../Api/Token';
import { getProductsCart, addProductCartApi } from '../Api/Cart';
import '../Scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState(undefined);
	const [reloadUser, setReloadUser] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const token = getToken();
		if (token) {
			setAuth({
				token,
				idUser: jwtDecode(token).id,
			});
		} else {
			setAuth(null);
		}
		setReloadUser(false);
	}, [reloadUser]);

	const login = (token) => {
		setToken(token);
		setAuth({
			token,
			idUser: jwtDecode(token).id,
		});
	};

	const logout = () => {
		if (auth) {
			removeToken();
			setAuth(null);
			router.push('/');
		}
	};

	const authData = useMemo(
		() => ({
			auth,
			login,
			logout,
			setReloadUser,
		}),
		[auth]
	);

	const cartData = useMemo(
		() => ({
			productCart: 0,
			addProductCart: (product) => addProduct(product),
			getProductsCart: getProductsCart,
			removeProductCart: () => null,
			removeAllProductsCart: () => null,
		}),
		[]
	);

	const addProduct = (product) => {
		const token = getToken();
		if (token) {
			addProductCartApi(product);
		} else {
			toast.warning('Favor de iniciar sesión');
		}
	};

	if (auth === undefined) {
		return null;
	}

	return (
		<AuthContext.Provider value={authData}>
			<CartContext.Provider value={cartData}>
				<Component {...pageProps} />
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
				/>
			</CartContext.Provider>
		</AuthContext.Provider>
	);
}
