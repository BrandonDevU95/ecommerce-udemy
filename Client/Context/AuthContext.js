import { createContext } from 'react';

const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
	setReladUser: () => null,
});

export default AuthContext;
