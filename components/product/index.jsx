import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product(props) {
	const { images, id, title, description, price, category, brand } = props;

	return (
		<article className={"container-fluid"}>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "300px",
				}}>
				<Image
					src={images[0]}
					alt={title}
					layout="fill"
					sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 50vw,
              33vw"
					objectFit="contain"
				/>
			</div>
			<hgroup>
				<h2>
					<Link href={`/product/${id}`}>{title}</Link>
				</h2>
				<p>{description}</p>
			</hgroup>
			<div className="grid">
				<p>
					precio:
					<small>${price.toLocaleString("en-US")}</small>
				</p>
				<p>
					marca:
					<small>{brand}</small>
				</p>
				<p>
					categoría:
					<small>{category}</small>
				</p>
			</div>
		</article>
	);
}
