import React from "react";
import Search from "./Search";

function Header({onSearchValue}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchValue={onSearchValue} />
    </header>
  );
}

export default Header;
