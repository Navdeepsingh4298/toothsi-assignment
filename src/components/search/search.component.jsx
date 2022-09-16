import { useState } from "react";

import "./search.component.css";

import AddToCartBtn from "../add-to-cart-btn/add.to.cart.btn.component";

const Search = () => {
	const [searchText, setSearchText] = useState("");

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	return (
		<div>
			<label>
				Search:
				<input className="search-box" type="search" onChange={handleChange} />
			</label>
			<AddToCartBtn />
		</div>
	);
};

export default Search;
