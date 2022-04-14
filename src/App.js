import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Feed } from "./pages";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scroll" element={<Feed />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
