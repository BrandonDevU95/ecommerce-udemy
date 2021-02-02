import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function ChangePasswordForm({ user, logout }) {
	return (
		<div className='change-password-form'>
			<h4>Cambio de contraseña</h4>
			<Form>
				<Form.Group widths='equal'>
					<Form.Input name='Password' type='password' placeholder='Contraseña' />
					<Form.Input name='Repeat Password' type='password' placeholder='Confirma Contraseña' />
				</Form.Group>
				<Button className='submit' type='submit'>
					Actualizar
				</Button>
			</Form>
		</div>
	);
}
