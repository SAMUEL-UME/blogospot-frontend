import React, { useCallback, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "@/styles/home/Home.module.css";

const { searchBar, search, search_icon } = styles;

const SearchBar = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = useCallback(() => {
    handleSearch(searchValue);
  }, [handleSearch, searchValue]);

  return (
    <div className={searchBar}>
      <div className={`${search} animate__animated animate__rubberBand`}>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={onSearch} aria-label="Search">
          <BiSearch className={search_icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
