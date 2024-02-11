import React from "react";
import "./Navbar.css";
import amazon from "../../assets/amazon-logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { contextValue } from "../Context/StateProvider";

const Navbar = () => {
  const [{ cart }] = contextValue();

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar-logo" src={amazon} alt="" />
      </Link>
      <div className="navbar-search">
        <input type="text" className="navbar-search-input" />
        <SearchIcon className="navbar-search-icon" />
      </div>
      <div className="navbar-navigations">
        <Link to="/login" className="navbar-link">
          <div className="navbar-option">
            <span className="navbar-option-1">Hello</span>
            <span className="navbar-option-2">Sign In</span>
          </div>
        </Link>

        <Link to="/login" className="navbar-link">
          <div className="navbar-option">
            <span className="navbar-option-1">Returns</span>
            <span className="navbar-option-2">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="navbar-link">
          <div className="navbar-option">
            <span className="navbar-option-1">Your</span>
            <span className="navbar-option-2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="navbar-link">
          <div className="navbar-option-basket">
            <ShoppingCartIcon />
            <span className="navbar-option-2 navbar-basket-count">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;