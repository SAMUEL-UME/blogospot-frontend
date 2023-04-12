import React, { useCallback } from "react";
import styles from "@/styles/Search.module.css";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
const {
  container,
  containerHeaidng,
  icon,
  category,
  content,
  containerContent,
  search_logo_menu,
  display,
  display_cat,
} = styles;

const SearchPage = ({ search, sideMenu }) => {
  const { menu } = useSelector((state) => state.theme);
  const memoizedSideMenu = useCallback(() => {
    sideMenu();
  }, [sideMenu]);
  return (
    <div className={container}>
      <div className={containerHeaidng}>
        <p>Search results for " {search}"</p>
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

      <div className={icon} onClick={memoizedSideMenu}>
        <RiCloseLine
          className={`${search_logo_menu} ${menu === "open" ? display : ""}`}
        />
        <FiMenu
          className={`${search_logo_menu} ${menu === "close" ? display : ""}`}
        />
      </div>
    </div>
  );
};

export default SearchPage;
