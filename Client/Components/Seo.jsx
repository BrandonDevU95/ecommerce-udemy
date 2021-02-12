import React from 'react';
import Head from 'next/head';

export default function Seo({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<meta property='description' content={description} />
		</Head>
	);
}

Seo.defaultProps = {
	title: 'Gaming - Juegos Favoritos',
	description: 'Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio',
};
