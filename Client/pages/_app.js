import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import '../Scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
	const authData = useMemo(
		() => ({
			auth: { name: 'Brandon', email: 'brandon.v179@gmail.com' },
			login: () => null,
			logout: () => null,
			setReloadUser: () => null,
		}),
		[]
	);
	return (
		<AuthContext.Provider value={authData}>
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
		</AuthContext.Provider>
	);
}
