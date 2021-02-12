import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { size } from 'lodash';
import useAuth from '../../../../Hook/useAuth';
import useCart from '../../../../Hook/useCart';

export default function FormPayment({ products, address }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Pago');
	};

	return (
		<form className='form-payment' onSubmit={handleSubmit}>
			<CardElement />
			<Button type='submit'>Pagar</Button>
		</form>
	);
}
