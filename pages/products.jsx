import React from "react";
import Product from "../components/product";
import { fetchProducts } from "../shared/utils/fetchProducts";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function products({ products }) {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Lista de productos Productos</h1>
			<ul className={styles.container_products}>
				{products.map((product, index) => {
					return (
						<li className={styles.product} key={index}>
							<Product {...product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export async function getServerSideProps() {
	const products = await fetchProducts();

	return {
		props: {
			products,
		},
	};
}