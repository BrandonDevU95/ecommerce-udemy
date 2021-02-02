import { useEffect, useState } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { useRouter } from 'next/router';
import useAuth from '../Hook/useAuth';
import { getMeApi } from '../Api/User';
import ChangeNameForm from '../Components/Account/ChangeNameForm/ChangeNameForm';

export default function account() {
	const [user, setUser] = useState(undefined);
	const { auth, logout } = useAuth();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const response = await getMeApi(logout);
			setUser(response || null);
		})();
	}, [auth]);

	if (user === undefined) return null;
	if (!auth && !user) {
		router.replace('/');
		return null;
	}

	return (
		<BasicLayout className='account'>
			<Configuration user={user} />
		</BasicLayout>
	);
}

function Configuration({ user }) {
	return (
		<div className='account__configuration'>
			<div className='title'>Configuracion</div>
			<div className='data'>
				<ChangeNameForm user={user} />
			</div>
		</div>
	);
}
