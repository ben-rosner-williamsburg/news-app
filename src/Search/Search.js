import { useCallback, useEffect, useState } from "react";
import "./Search.css";
import debounce from "lodash/debounce";

const Search = ({ setQuery }) => {
  const [searchInputValue, setSearchInputValue] = useState("")

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchInputValue(newValue)
    setQuery(newValue)
  };

  return (
    <form className="search-bar-container">
      <input
        type="text"
        name="search-input"
        id="searchInput"
        className="search-input"
        placeholder="What kind of news do you want to see?"
        onChange={handleInputChange}
        value={searchInputValue}
      />
    </form>
  );
};

export default Search;
