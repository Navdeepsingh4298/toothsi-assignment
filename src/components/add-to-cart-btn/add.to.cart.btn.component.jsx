import React from "react";
import { useNavigate } from "react-router-dom";

import "./add.to.cart.btn.component.css";

const AddToCartBtn = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/cart");
	};

	return (
		<>
			<button type="submit" className="atcbtn" onClick={handleClick}>
				Add to Cart
			</button>
		</>
	);
};

export default AddToCartBtn;
