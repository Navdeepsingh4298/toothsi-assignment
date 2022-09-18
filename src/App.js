import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stylesheet
import "./App.css";

// Components
import Home from "./pages/homepage/home";
import Cart from "./pages/cartpage/cart";
import Thankyou from "./pages/thankyou-page/thankyou.page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/thankyou" element={<Thankyou />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
