import React, { useState } from "react";
import styles from "@/styles/Search.module.css";
import { useSelector } from "react-redux";
import Posts from "../components/Post/Posts";

const {
  container,
  containerHeaidng,
  category,
  content,
  containerContent,
  display_cat,
} = styles;

const SearchPage = ({ search, sideMenu, data, theme }) => {
  const { menu } = useSelector((state) => state.theme);
  const [selected, setSelected] = useState("Posts");
  const handleSelection = (event) => {
    setSelected(event.target.innerText);
  };

  let dataToRender;

  switch (selected) {
    case "Posts":
      dataToRender = "posts";
      break;
    case "Tags":
      dataToRender = "tags";
      break;
    case "People":
      dataToRender = "people";
      break;
    case "My post only":
      dataToRender = "myPosts";
      break;
    default:
      dataToRender = "posts";
      break;
  }

  return (
    <div className={container}>
      <div className={containerHeaidng}>
        <p>
          Search results for : <span> {search}</span>
        </p>
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
            <li onClick={handleSelection}>Posts</li>
            <li onClick={handleSelection}>Tags</li>
            <li onClick={handleSelection}>People</li>
            <li onClick={handleSelection}>My post only</li>
          </ul>
        </div>
        <div className={content}>
          {dataToRender === "posts" && <Posts data={data} theme={theme} />}
          {dataToRender === "people" && <h1>People</h1>}
          {dataToRender === "tags" && <h1>Tags</h1>}
          {dataToRender === "myPosts" && <h1>My post</h1>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
