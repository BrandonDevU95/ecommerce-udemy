import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
	return (
		<div className='change-email-form'>
			<h4>
				Cambio de Email <span>(Email actual: {user.email})</span>{' '}
			</h4>
			<Form>
				<Form.Group widths='equal'>
					<Form.Input name='email' placeholder='Email' />
					<Form.Input name='repeatEmail' placeholder='Confirma Email' />
				</Form.Group>
				<Button className='submit' type='submit'>
					Actualizar
				</Button>
			</Form>
		</div>
	);
}
