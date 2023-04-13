import React, { useCallback } from "react";
import styles from "@/styles/Search.module.css";
import { useSelector } from "react-redux";

const {
  container,
  containerHeaidng,
  category,
  content,
  containerContent,
  display_cat,
} = styles;

const SearchPage = ({ search, sideMenu }) => {
  const { menu } = useSelector((state) => state.theme);
  return (
    <div className={container}>
      <div className={containerHeaidng}>
        <p>Search results for : <span> {search}</span></p>
        <div>
          <ul>
            <li>Recent</li>
            <li>Oldest</li>
          </ul>
        </div>
      </div>
      <div className={containerContent}>
        <div
          className={`${category} ${
            menu === "open" ? display_cat : ""
          } animate__animated animate__backInLeft`}
        >
          <ul>
            <li>Posts</li>
            <li>Tags</li>
            <li>People</li>
            <li>My post only</li>
          </ul>
        </div>
        <div className={content}></div>
      </div>
    </div>
  );
};

export default SearchPage;
