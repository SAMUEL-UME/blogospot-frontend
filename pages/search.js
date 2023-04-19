import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Search.module.css";
import SearchPage from "@/src/components/SearchPage";
import { useSelector, useDispatch } from "react-redux";
import { sideBar } from "@/src/Redux/themeSlice.js";

const { dark, search_container, light } = styles;

export default function Search({ data }) {
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
        <SearchPage search={search} sideMenu={sideMenu} data={data} theme={theme} />
      </div>
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
