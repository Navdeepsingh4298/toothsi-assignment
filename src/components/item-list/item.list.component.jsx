// Data
import items from "./items.js";

// Component
import Item from "../item/item.component";

const ItemList = () => {
	return (
		<div>
			{items.map((item) => (
				<Item
					key={item.pid}
					id={item.pid}
					img={item.img}
					name={item.name}
					color={item.color}
					price={item.price}
					stock={item.stock}
					totalQty={item.totalQty}
				/>
			))}
		</div>
	);
};

export default ItemList;
