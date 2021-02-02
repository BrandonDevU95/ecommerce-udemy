import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: (formData) => {
			console.log(formData);
		},
	});
	return (
		<div className='change-email-form'>
			<h4>
				Cambio de Email <span>(Email actual: {user.email})</span>{' '}
			</h4>
			<Form onSubmit={formik.handleSubmit}>
				<Form.Group widths='equal'>
					<Form.Input
						name='email'
						placeholder='Email'
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email}
					/>
					<Form.Input
						name='repeatEmail'
						placeholder='Confirma Email'
						onChange={formik.handleChange}
						value={formik.values.repeatEmail}
						error={formik.errors.repeatEmail}
					/>
				</Form.Group>
				<Button className='submit' type='submit'>
					Actualizar
				</Button>
			</Form>
		</div>
	);
}

function initialValues() {
	return {
		email: '',
		repeatEmail: '',
	};
}

function validationSchema() {
	return {
		email: Yup.string()
			.email(true)
			.required(true)
			.oneOf([Yup.ref('repeatEmail')], true),
		repeatEmail: Yup.string()
			.email(true)
			.required(true)
			.oneOf([Yup.ref('email')], true),
	};
}
