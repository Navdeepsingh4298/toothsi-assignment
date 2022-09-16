import { useState } from "react";

import "./filter.component.css";

const Filter = () => {
	const categoryOptions = [
		{ label: "Category", value: "" },
		{ label: "Hoodies", value: "hoodies" },
		{ label: "Pants", value: "pants" },
		{ label: "Shirts", value: "shirts" },
	];

	const sizeOptions = [
		{ label: "Size", value: "" },
		{ label: "XL", value: "xl" },
		{ label: "L", value: "l" },
		{ label: "M", value: "m" },
		{ label: "S", value: "s" },
		{ label: "XS", value: "xs" },
	];

	const [category, setCategory] = useState("category");
	const [size, setSize] = useState("size");

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handleSizeChange = (event) => {
		setSize(event.target.value);
	};

	return (
		<div>
			<form>
				<Dropdown
					options={categoryOptions}
					value={category}
					onChange={handleCategoryChange}
				/>

				<Dropdown
					options={sizeOptions}
					value={size}
					onChange={handleSizeChange}
				/>
				<input className="resetbtn" type="reset" value="Reset" />
			</form>
		</div>
	);
};

const Dropdown = ({ value, options, onChange }) => {
	return (
		<select className="dropdown" value={value} onChange={onChange}>
			{options.map(({ label, value }) => (
				<option key={label} value={value}>
					{label}
				</option>
			))}
		</select>
	);
};

export default Filter;
