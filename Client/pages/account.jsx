import { useEffect, useState } from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
import useAuth from '../Hook/useAuth';
import { getMeApi } from '../Api/User';
import ChangeNameForm from '../Components/Account/ChangeNameForm/ChangeNameForm';
import ChangeEmailForm from '../Components/Account/ChangeEmailForm/ChangeEmailForm';
import ChangePasswordForm from '../Components/Account/ChangePasswordForm/ChangePasswordForm';
import BasicModal from '../Components/Modal/BasicModal';
import AddressForm from '../Components/Account/AddressForm/AddressForm';

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
			<Addresses />
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
				<ChangePasswordForm user={user} logout={logout} />
			</div>
		</div>
	);
}

function Addresses() {
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');
	const [formModal, setFormModal] = useState(null);

	const openModal = (title) => {
		setTitleModal(title);
		setFormModal(<AddressForm />);
		setShowModal(true);
	};

	return (
		<div className='account__addresses'>
			<div className='title'>
				Direcciones
				<Icon name='plus' link onClick={() => openModal('Nueva Direccion')} />
			</div>
			<div className='data'>
				<p>Lista de direcciones</p>
			</div>
			<BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
				{formModal}
			</BasicModal>
		</div>
	);
}
