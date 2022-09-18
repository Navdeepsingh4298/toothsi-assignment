import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart.total.component.css";

const CartTotal = () => {
	const navigate = useNavigate();

	const handleCheckoutBtn = () => {
		navigate("/thankyou");
	};

	return (
		<div className="cart-container">
			<span className="cart-total-head">Cart totals</span>
			<div className="cart-subtotal-container">
				<span>Subtotal</span>
				<span>$100.00</span>
			</div>
			<div className="cart-total-container">
				<span>Total</span>
				<span>$100.00</span>
			</div>
			<button onClick={handleCheckoutBtn} className="cart-checkout-btn">
				PROCEED TO CHECKOUT
			</button>
		</div>
	);
};

export default CartTotal;
