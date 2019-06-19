import React from "react";
import Search from "./Searchbar";

function NavBar() {
  return (
    <ul className="navbar">
      <Search />
      <li>
        <a href="Home">Home</a>
      </li>
      <li>
        <a href="Purchase">Purchase</a>
      </li>
    </ul>
  );
}

export default NavBar;
