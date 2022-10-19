import React from "react";
import ProductDetail from "../../components/productDetails";
import { fetchProduct } from "../../shared/utils/fetchProduct";
import { fetchProducts } from "../../shared/utils/fetchProducts";

export default function ProductDetails(props) {
	return <ProductDetail {...props.product} />;
}

export async function getStaticPaths() {
	const products = await fetchProducts();
	const paths = products.map((product) => ({
		params: { id: product.id + "" },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const product = await fetchProduct(params.id);
	return {
		props: {
			product,
		},
	};
}
