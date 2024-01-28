import "./Search.css";
import { useEffect, useState } from "react";
import {debounce} from "lodash";


const Search = ({setQuery}) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (query) => {console.log("Searching for:", query)}
  useEffect(() => {
    const debouncedSearch = debounce(handleSearch, 1000)
    if (searchInput) {
      debouncedSearch(searchInput)
    }
  }, [searchInput])
  return (
    <form className="search-bar-container">
      <input
        type="text"
        name="search-input"
        id="searchInput"
        className="search-input"
        placeholder="What kind of news do you want to see?"
        onChange={(event) => setQuery(event.target.value)}
        value={searchInput}
      />
    </form>
  );
};

export default Search;
