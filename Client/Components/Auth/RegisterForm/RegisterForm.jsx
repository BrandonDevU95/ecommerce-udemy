import React from 'react';

export default function RegisterForm(props) {
	const { showLoginForm } = props;
	return (
		<div>
			<h1>Estamos en Register</h1>
			<button onClick={showLoginForm}>Login</button>
		</div>
	);
}
