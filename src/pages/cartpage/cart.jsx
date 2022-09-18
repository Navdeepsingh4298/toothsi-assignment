import React from "react";

import "./cart.css";

// Components

import CartItemListHead from "../../components/cart-item-list-head/cart.item.list.head.component";

import CartItemList from "../../components/cart-item-list/cart.item.list.component";

import CartTotal from "../../components/cart-total/cart.total.component";

const Cart = () => {
	return (
		<div className="cart">
			<div className="cart-items-container">
				<CartItemListHead />
				<CartItemList />
			</div>
			<div className="cart-totals-container">
				<CartTotal />
			</div>
		</div>
	);
};

export default Cart;
