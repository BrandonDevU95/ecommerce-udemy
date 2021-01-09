import React from 'react';
import { Container } from 'semantic-ui-react';

export default function BasicLayout(props) {
	const { children } = props;
	return (
		<Container className='basic-layout'>
			<Container className='content'>{children} </Container>
		</Container>
	);
}
