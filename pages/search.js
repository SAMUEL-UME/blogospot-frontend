import React from "react";
import Head from "next/head";
import styles from "@/styles/home/Search.module.css";
import { useSelector } from "react-redux";

export default function Search() {
  const { search } = useSelector((state) => state.search);
  return (
    <>
      <Head>
        <title>search</title>
      </Head>
      <div className={styles.container}>
        <h1 style={{ color: "#fff", paddingTop: "4rem" }}>{search}</h1>
      </div>
    </>
  );
}
