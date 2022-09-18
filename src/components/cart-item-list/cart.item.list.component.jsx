import React from "react";
import cartItems from "./cartItems.js";

// Components
import CartItem from "../cart-item/cart.item.component";

const CartItemList = () => {
	return (
		<div>
			{cartItems.map((cartItem) => (
				<CartItem
					key={cartItem.pid}
					img={cartItem.img}
					name={cartItem.name}
					price={cartItem.price}
					qty={cartItem.qty}
				/>
			))}
		</div>
	);
};

export default CartItemList;
