import "./Header.css";
import logo from "../../assets/logo.svg";
const Header = () => {
	return (
		<div className="flex-hz-space-bw p-2 bg-bg-black md:px-40 sm:px-10 px-5 py-3 border-b border-white border-opacity-50">
			<p>
				<img src={logo} alt="SVG" />
			</p>
			<button className="px-5 py-1 bg-primary-bg-color rounded-md text-lg">
				Login
			</button>
		</div>
	);
};

export default Header;
