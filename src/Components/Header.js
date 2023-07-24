// import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`navbar-light`}>
      <div className="nav-images">
        <img
          className="nav-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKo8o3HS6bE5Sy-XvlpIX5xY2kmprIeefIQ&usqp=CAU"
        />
      </div>
      <div className="items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
