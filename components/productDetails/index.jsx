import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail(props) {
	const { title, images, description, price, category, brand } = props;
	return (
		<div className="container" style={{ padding: "40px " }}>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "500px",
				}}>
				<Image
					src={images[0]}
					alt={title}
					layout="fill"
					sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 50vw,
              50vw"
					objectFit="contain"
				/>
			</div>

			<hgroup>
				<h2>{title}</h2>
				<p>{description}</p>
			</hgroup>
			<div className="grid">
				<p>
					precio:
					<p>
						<small>${price.toLocaleString("en-US")}</small>
					</p>
				</p>
				<p>
					marca:
					<p>
						<small>{brand}</small>
					</p>
				</p>
				<p>
					categoría:
					<p>
						<small>{category}</small>
					</p>
				</p>
			</div>
			<Link href={"/products"}>Volver a la lista</Link>
		</div>
	);
}
