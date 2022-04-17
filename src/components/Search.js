import {React, useState} from "react";

function Search({onSearchValue}) {
  const [searchInput , setSearchInput] = useState('')
  function handleSearchInput(value){
    setSearchInput(value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchValue(searchInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
