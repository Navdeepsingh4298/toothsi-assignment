import React, { useState } from "react";

import "./item.component.css";

const Item = ({ id, img, name, color, price, stock, totalQty }) => {
	const [pid, setPid] = useState(0);
	const [qty, setQty] = useState(0);

	const selectItem = () => {
		setPid(id);
		console.log(pid);
	};
	const handleQtyChange = (e) => {
		setQty(e.target.value);
		console.log(qty);
	};

	return (
		<div className="item-container">
			<img src={img} alt="product_image" className="item-image" />
			<span className="item-name">{name}</span>
			<span className="item-color">{color}</span>
			<span className={stock ? "item-in-stock" : "item-out-of-stock"}>
				{stock ? "In stock" : "out of stock"}
			</span>
			<span className="item-price">${price}</span>
			<div className="item-buy">
				<input
					type="number"
					min={stock ? "1" : "0"}
					max={totalQty}
					defaultValue={stock ? "1" : "0"}
					onChange={handleQtyChange}
				/>
				<span className="cart-icon-container">
					<img
						className="cart-icon"
						src="assets/img/cart-icon.webp"
						alt="cart-icon"
					/>
				</span>
				<input type="checkbox" disabled={!stock && true} onClick={selectItem} />
			</div>
		</div>
	);
};

export default Item;
