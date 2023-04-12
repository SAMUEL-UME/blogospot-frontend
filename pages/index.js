import { useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getInput } from "@/src/Redux/searchSlice";
import styles from "@/styles/home/Home.module.css";
import Posts from "@/src/components/Post/Posts";
import SearchBar from "@/src/components/Post/SearchBar";
import Aside from "@/src/components/Aside";
import { useSelector } from "react-redux";

export default function Home({ data }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = useCallback(
    (searchValue) => {
      if (searchValue.length >= 1) {
        dispatch(getInput(searchValue));
        router.push("/search");
      }
    },
    [dispatch, router]
  );

  return (
    <>
      <Head>
        <title>Blogospot</title>
      </Head>
      <main
        className={`${styles.navbar_container} ${
          theme === "true" ? styles.dark : styles.light
        }`}
      >
        <div className={styles.hero}>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className={`${styles.main} m-auto`}>
          {/* All post data  */}
          <div className={`${styles.posts} `}>
            <h1 className={styles.container_h1}>Featured Post</h1>
            <Posts data={data} theme={theme} />
          </div>
          {/* Aside (Filter post by tags, recent post, most viewed) */}
          <Aside />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await import("/data/data.json");
  return {
    props: {
      data,
    },
  };
}
    