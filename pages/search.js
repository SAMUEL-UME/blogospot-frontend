import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Search.module.css";
import SearchPage from "@/src/components/SearchPage";
import { useSelector, useDispatch } from "react-redux";
import { sideBar } from "@/src/Redux/themeSlice.js";



const { dark, search_container, light } = styles;
export default function Search() {
  const { search } = useSelector(({ search }) => search);
  const { theme } = useSelector(({ theme }) => theme);
  const dispatch = useDispatch();
  const sideMenu = useCallback(() => {
    dispatch(sideBar());
  }, [dispatch]);


  return (
    <>
      <Head>
        <title>search</title>
      </Head>
      <div className={`${search_container} ${theme === "true" ? dark : light}`}>
        <SearchPage search={search} sideMenu={sideMenu} />
      </div>
    </>
  );
}
/***import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Posts");

  const handleSelection = (event) => {
    setSelected(event.target.innerText);
  };

  const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." },
  ];

  const tags = [
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "CSS" },
  ];

  const people = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
  ];

  const myPosts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 3, title: "Third Post", content: "This is the third post." },
  ];

  let dataToRender;

  switch (selected) {
    case "Posts":
      dataToRender = posts;
      break;
    case "Tags":
      dataToRender = tags;
      break;
    case "People":
      dataToRender = people;
      break;
    case "My post only":
      dataToRender = myPosts;
      break;
    default:
      dataToRender = posts;
      break;
  }

  return (
    <div>
      <ul>
        <li onClick={handleSelection}>Posts</li>
        <li onClick={handleSelection}>Tags</li>
        <li onClick={handleSelection}>People</li>
        <li onClick={handleSelection}>My post only</li>
      </ul>
      <div>
        {dataToRender.map((item) => (
          <div key={item.id}>
            <h2>{item.title || item.name}</h2>
            <p>{item.content || item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
 */