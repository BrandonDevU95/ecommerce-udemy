import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';

export default function AddressForm() {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: (formData) => {
			console.log(formData);
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Form.Input
				name='title'
				type='text'
				label='Titulo de la dirección'
				placeholder='Titulo de la dirección'
				onChange={formik.handleChange}
				value={formik.values.title}
				error={formik.errors.title}
			/>
			<Form.Group widths='equal'>
				<Form.Input
					name='name'
					type='text'
					label='Nombre y Apellido'
					placeholder='Nombre y Apellido'
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.errors.name}
				/>
				<Form.Input
					name='address'
					type='text'
					label='Dirección'
					placeholder='Dirección'
					onChange={formik.handleChange}
					value={formik.values.address}
					error={formik.errors.address}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					name='city'
					type='text'
					label='Ciudad'
					placeholder='Ciudad'
					onChange={formik.handleChange}
					value={formik.values.city}
					error={formik.errors.city}
				/>
				<Form.Input
					name='state'
					type='text'
					label='Estados/Provincia/Región'
					placeholder='Estados/Provincia/Región'
					onChange={formik.handleChange}
					value={formik.values.state}
					error={formik.errors.state}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					name='postalCode'
					type='text'
					label='Código Postal'
					placeholder='Código Postal'
					onChange={formik.handleChange}
					value={formik.values.postalCode}
					error={formik.errors.postalCode}
				/>
				<Form.Input
					name='phone'
					type='text'
					label='Número de Teléfono'
					placeholder='Número de Teléfono'
					onChange={formik.handleChange}
					value={formik.values.phone}
					error={formik.errors.phone}
				/>
			</Form.Group>
			<div className='actions'>
				<Button className='submit' type='submit'>
					Crear Dirección
				</Button>
			</div>
		</Form>
	);
}

function initialValues() {
	return {
		title: '',
		name: '',
		address: '',
		city: '',
		state: '',
		postalCode: '',
		phone: '',
	};
}

function validationSchema() {
	return {
		title: Yup.string().required(true),
		name: Yup.string().required(true),
		address: Yup.string().required(true),
		city: Yup.string().required(true),
		state: Yup.string().required(true),
		postalCode: Yup.string().required(true),
		phone: Yup.string().required(true),
	};
}
