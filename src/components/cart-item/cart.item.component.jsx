import React from "react";

import "./cart.item.component.css";

const CartItem = ({ img, name, price, qty }) => {
	return (
		<div className="cart-item-container">
			<div className="product-container">
				<span className="cancel-icon">x</span>
				<img src={img} alt="cart_item" className="cart-item-img" />
				<span className="cart-item-name">{name}</span>
			</div>
			<div>${price}</div>
			<div className="cart-item-qty">
				<button className="cart-item-qty-dec">&#45;</button>
				{qty}
				<button className="cart-item-qty-inc">&#43;</button>
			</div>
			<div className="cart-item-subtotal">${qty * price}</div>
		</div>
	);
};

export default CartItem;
