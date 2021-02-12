import { useState, useEffect, Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import moment from 'moment';
import Link from 'next/link';
import BasicModal from './../Modal/BasicModal';
import 'moment/locale/es';

export default function Order({ order }) {
	const { game, totalPayment, createdAt, addressShipping } = order;
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
						<Icon name='eye' circular link onClick={() => console.log('Info')} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
