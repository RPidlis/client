import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Title = styled.h1`
  color: red;
`;

export default function Home () {
	return (<div>
		<Head>
			<title>Create Next App</title>
		</Head>
		<NavBar/>
	</div>);
}
