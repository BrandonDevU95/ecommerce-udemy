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
					<Link href={`/${url}`}>
						<a>
							<Image src={poster.url} alt={title} />
						</a>
					</Link>
				</div>
			</div>
		</Fragment>
	);
}
