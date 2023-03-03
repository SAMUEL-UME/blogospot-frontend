import React from "react";
import styles from "@/styles/Home.module.css";

const BlogBlock = ({ data }) => {
  return (
    <div>
      {data?.map((data) => (
        <div key={data._id} className={styles.blog}>
          {data.tags?.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
          <h1 className={styles.blog_head}>{data.title}</h1>
          <p>{data.body.slice(0, 100)}...</p>
          <div className={styles.meta_info}>
            <div>published by: {data.author.username}</div>
            <div>1min read</div>
            <div>jan 31, 31</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogBlock;
