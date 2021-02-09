import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../Layouts/BasicLayout';

export default function Game() {
	const { query } = useRouter();

	return (
		<div>
			<h1>Juegos...</h1>
		</div>
	);
}
