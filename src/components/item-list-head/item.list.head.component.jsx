import React from "react";

import Filter from "../filter/filter.component";
import Search from "../search/search.component";

import "./item.list.head.component.css";

const ItemListHead = () => {
	return (
		<>
			<div className="upper-container">
				<Filter />
				<Search />
			</div>
			<ul className="head-list">
				<li className="head-list-item">Image</li>
				<li className="head-list-item">Name</li>
				<li className="head-list-item">Color</li>
				<li className="head-list-item">Stock</li>
				<li className="head-list-item">Price</li>
				<li
					style={{ justifySelf: "end", paddingRight: "10px" }}
					className="head-list-item"
				>
					Buy
				</li>
			</ul>
		</>
	);
};

export default ItemListHead;
