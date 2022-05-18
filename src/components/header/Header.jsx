import "./Header.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, isLoggedIn } = useSelector((store) => store.authSlice);

  return (
    <div className="flex-hz-space-bw p-2 bg-bg-black md:px-40 sm:px-10 px-5 py-3 border-b border-white border-opacity-50 h-16 ">
      <Link to="/home">
        <img src={logo} alt="SVG" />
      </Link>
      <Link
        to={isLoggedIn ? `/profile/${user._id}` : "/login"}
        className="px-5 py-1 bg-primary-bg-color rounded-md text-lg"
      >
        {isLoggedIn ? user.firstName : "Login"}
      </Link>
    </div>
  );
};

export default Header;
