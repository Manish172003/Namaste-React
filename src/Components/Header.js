// import { useState } from "react";
import { Link } from "react-router-dom";
import img from "./preview.png";
const Header = () => {
  return (
    <div className="flex justify-around bg-blue-100 shadow-lg">
      <div>
        <img className="w-20 ml-2" src={img} />
      </div>
      <div className="flex items-center ">
        <ul className="flex">
          <li className="px-4">
            <Link to="/">🏠Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">✊About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">📞Contact Us</Link>
          </li>
          <li className="px-4">🛒Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
