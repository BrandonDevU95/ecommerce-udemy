import { useState, useEffect, Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import moment from 'moment';
import Link from 'next/link';
import BasicModal from './../Modal/BasicModal';
import 'moment/locale/es';

export default function Order({ order }) {
	const { game, totalPayment, createdAt, addressShipping } = order;
	const [showModal, setShowModal] = useState(false);
	const { title, poster, url } = game;

	return (
		<Fragment>
			<div className='order'>
				<div className='order__info'>
					<div className='order__info-data'>
						<Link href={`/${url}`}>
							<a>
								<Image src={poster.url} alt={title} />
							</a>
						</Link>
						<div className=''>
							<h2>{title}</h2>
							<p>${totalPayment}</p>
						</div>
					</div>
					<div className='order__other'>
						<p className='order__other-date'>
							{moment(createdAt).format('L')} - {moment(createdAt).format('LT')}
						</p>
						<Icon name='eye' circular link onClick={() => setShowModal(true)} />
					</div>
				</div>
			</div>
			<AddressModal
				showModal={showModal}
				setShowModal={setShowModal}
				addressShipping={addressShipping}
				title={title}
			/>
		</Fragment>
	);
}

function AddressModal({ showModal, setShowModal, addressShipping, title }) {
	return (
		<BasicModal show={showModal} setShow={setShowModal} size='tiny' title={title}>
			<h3>El pedido se envio a: </h3>
			<div className=''>
				<p>{addressShipping?.name}</p>
				<p>{addressShipping?.address}</p>
				<p>
					{addressShipping?.state}, {addressShipping?.city} {addressShipping?.postalCode}
				</p>
				<p>{addressShipping?.phone}</p>
			</div>
		</BasicModal>
	);
}
