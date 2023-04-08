import React, { useState } from "react";
import styles from "@/styles/home/Home.module.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearch(search)}>
          <BiSearch className={styles.search_icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
