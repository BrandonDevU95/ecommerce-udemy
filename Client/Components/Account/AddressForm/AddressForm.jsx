import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function AddressForm() {
	return (
		<Form>
			<Form.Input name='title' type='text' label='Titulo de la dirección' placeholder='Titulo de la dirección' />
			<Form.Group widths='equal'>
				<Form.Input name='name' type='text' label='Nombre y Apellido' placeholder='Nombre y Apellido' />
				<Form.Input name='address' type='text' label='Dirección' placeholder='Dirección' />
			</Form.Group>
			<Form.Group>
				<Form.Input name='city' type='text' label='Ciudad' placeholder='Ciudad' />
				<Form.Input
					name='state'
					type='text'
					label='Estados/Provincia/Región'
					placeholder='Estados/Provincia/Región'
				/>
			</Form.Group>
			<Form.Group>
				<Form.Input name='postalCode' type='text' label='Código Postal' placeholder='Código Postal' />
				<Form.Input name='phone' type='text' label='Número de Teléfono' placeholder='Número de Teléfono' />
			</Form.Group>
			<div className="actions">
				<Button className='submit' type='submit'>
					Crear Dirección
				</Button>
			</div>
		</Form>
	);
}
