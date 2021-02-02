import { useEffect, useState } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { useRouter } from 'next/router';
import useAuth from '../Hook/useAuth';
import { getMeApi } from '../Api/User';
import ChangeNameForm from '../Components/Account/ChangeNameForm/ChangeNameForm';
import ChangeEmailForm from '../Components/Account/ChangeEmailForm/ChangeEmailForm';

export default function account() {
	const [user, setUser] = useState(undefined);
	const { auth, logout, setReloadUser } = useAuth();
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
			<Configuration user={user} logout={logout} setReloadUser={setReloadUser} />
		</BasicLayout>
	);
}

function Configuration({ user, logout, setReloadUser }) {
	return (
		<div className='account__configuration'>
			<div className='title'>Configuracion</div>
			<div className='data'>
				<ChangeNameForm user={user} logout={logout} setReloadUser={setReloadUser} />
				<ChangeEmailForm user={user} logout={logout} setReloadUser={setReloadUser} />
			</div>
		</div>
	);
}
