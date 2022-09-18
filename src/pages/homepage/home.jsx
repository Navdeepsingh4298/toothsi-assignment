import React from "react";

import ItemList from "../../components/item-list/item.list.component";
import ItemListHead from "../../components/item-list-head/item.list.head.component";

const Home = () => {
	return (
		<div>
			<ItemListHead />
			<ItemList />
		</div>
	);
};

export default Home;
