import { useState, useEffect } from 'react';
import { Table, Image, Icon, Tab } from 'semantic-ui-react';
import { map, forEach } from 'lodash';

export default function SummaryCart({ products }) {
	return (
		<div className='summary-cart'>
			<div className='title'>Resumen del Carrito</div>
			<div className='data'>
				<Table celled structured>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Producto</Table.HeaderCell>
							<Table.HeaderCell>Plataforma</Table.HeaderCell>
							<Table.HeaderCell>Entrega</Table.HeaderCell>
							<Table.HeaderCell>Precio</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{map(products, (product) => (
							<Table.Row key={product.id} className='summary-cart__product'>
								<Table.Cell>
									<Icon name='close' link onClick={() => console.log('Borrar')} />
									<Image src={product.poster.url} alt={product.title} />
									{product.title}
								</Table.Cell>
								<Table.Cell>{product.platform.title}</Table.Cell>
								<Table.Cell>Inmediata</Table.Cell>
								<Table.Cell>${product.price}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}
