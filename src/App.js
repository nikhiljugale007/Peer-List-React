import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Feed, Scroll, Profile } from "./pages";
import { Header, Footer } from "./components";
function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/scroll/*" element={<Feed />} />
					<Route path="/mockman" element={<Mockman />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
