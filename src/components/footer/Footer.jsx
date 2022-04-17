import "./Footer.css";
import peerlistlogofooter from "../../assets/peerlistlogofooter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col  bg-secondary-bg-color text-primary-bg-color sm:px-20 px-10 py-10">
      <div className="flex-grow-0 sm:w-5/12">
        <img src={peerlistlogofooter} alt="footer-logo" />
        <p>The professional community you were waiting for</p>
        <Link
          to="/scroll"
          className="px-5 py-4 my-5 bg-complimentary-font-color rounded-md flex flex-row items-center gap-3 hover:opacity-75"
        >
          <p className="text-primary-bg-color text-lg font-bold ">
            Join Peerlist
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
                className="bg-primary-bg-color"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex-1 ">
        <div className="flex sm:flex-row flex-col sm:gap-2 gap-5">
          <div className="flex-1 list-none flex flex-col gap-2">
            <p className="list-item">Blog</p>
            <p className="list-item">Changelog</p>
            <p className="list-item">Contact Us</p>
            <p className="list-item">Twitter</p>
          </div>
          <div className="flex-1 list-none flex flex-col gap-2">
            <p className="list-item">Individual Profile</p>
            <p className="list-item">Professional Networking</p>
          </div>
          <div className="flex-1 list-none flex flex-col gap-2">
            <p className="list-item">Privacy</p>
            <p className="list-item">Code Of Conduct</p>
            <p className="list-item">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
