import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

const Navbar = () => {
  const menulist = [
    {
      title: "Catalog",
      url: "/",
    },
    {
      title: "Limited Collection",
      url: "/limited ",
    },
    {
      title: "About us",
      url: "/about ",
    },
    {
      title: "Inspiration",
      url: "/inspiration",
    },
    {
      title: "Contacts",
      url: "/contacts",
    },
  ];

  return (
    <div className="body">
      <header>
        <div className="logo"></div>
        <nav className="navbar">
          {menulist.map((link) => (
            <Link to={link.url}>{link.title}</Link>
          ))}
        </nav>
        <div id="btn">
          <span>
            <BiSearch />
          </span>
          <span>
            <BsSuitHeart />
          </span>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
