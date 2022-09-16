import React from "react";

import "./add.to.cart.btn.component.css";

const AddToCartBtn = () => {
	const handleClick = () => {
		console.log("add to cart button clicked");
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
