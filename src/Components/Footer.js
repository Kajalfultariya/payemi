import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-5">
      <div className="pt-4 pt-md-0">
        <Link className="text-light px-2 py-1" to="/home">
          Home
        </Link>
        <Link className="text-light px-2 py-1" to="/about-us">
          About us
        </Link>

        <Link className="text-light px-2 py-1" to="/privacy-policy">
          Privacy Policy
        </Link>

        <Link className="text-light  px-2 py-1" to="/refund-and-cancellation">
          Refund and Cancellation
        </Link>

        <Link className="text-light px-2 py-1" to="/terms-and-conditions">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
