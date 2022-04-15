import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Feed } from "./pages";
import { Header, Footer } from "./components";
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scroll" element={<Feed />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
