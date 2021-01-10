import React from 'react';

export default function LoginForm(props) {
	const { showRegisterForm } = props;
	return (
		<div>
			<h1>Estamos en login</h1>
			<button onClick={showRegisterForm}>Registro</button>
		</div>
	);
}
