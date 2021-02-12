import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { size } from 'lodash';
import useAuth from '../../../../Hook/useAuth';
import useCart from '../../../../Hook/useCart';

export default function FormPayment({ products, address }) {
	const [loading, setLoading] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!stripe || !elements) return;

		const cartElement = elements.getElement(CardElement);
		const result = await stripe.createToken(cartElement);

		if (result.error) {
			toast.error(result.error.message);
		} else {
			console.log(result);
		}

		setLoading(false);
	};

	return (
		<form className='form-payment' onSubmit={handleSubmit}>
			<CardElement />
			<Button type='submit' loading={loading} disabled={!stripe}>
				Pagar
			</Button>
		</form>
	);
}
