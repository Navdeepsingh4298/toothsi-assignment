import React from "react";

import "./cart.item.head.list.component.css"

const CartItemListHead = () => {
	return (
		<div>
			<ul className="cart-item-head-list">
				<li>Product</li>
				<li>Price</li>
				<li>Quantity</li>
				<li>Subtotal</li>
			</ul>
		</div>
	);
};

export default CartItemListHead;
