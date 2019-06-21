import React from "react";
import Search from "./Searchbar";



function NavBar({ proceedToSell }) {
  return (
    <ul className='navbar'>
      <li><button onClick={proceedToSell}>Sell</button></li>
      <Search />
    </ul>
  );
}

export default NavBar;
