import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Yekini</title>
				<meta
					name="description"
					content="Order a technical service without hassles now!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrapper>
				<Title>Hello Rasheed!</Title>
			</Wrapper>
		</div>
	);
}
