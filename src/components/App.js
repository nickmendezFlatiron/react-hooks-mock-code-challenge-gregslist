import {React , useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[searchValue , setSearchValue] = useState("")

  function handleSearchValue(value) {
    setSearchValue(value)
    console.log("Search value ", value)
  }

  return (
    <div className="app">
      <Header onSearchValue={handleSearchValue} searchValue={searchValue}/>
      <ListingsContainer searchValue={searchValue}/>
    </div>
  );
}

export default App;
