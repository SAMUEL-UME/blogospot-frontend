import React from "react";
import moment from "moment";
import styles from "@/styles/home/Home.module.css";

const BlogBlock = ({ data }) => {
  return (
    <div>
      {data?.map((data) => (
        <div key={data._id} className={styles.blog}>
          <div className={styles.thumb}>
           {data.read_count}<p>&#128065;</p>
          </div>
          {data.tags?.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
          <h1 className={styles.blog_head}>{data.title}.</h1>
          <p>{data.body.slice(0, 100)}...</p>
          <div className={styles.meta_info}>
            <div className={styles.author}>
              published by: <strong>{data.author.username}</strong>
            </div>
            <div className={styles.readTime}>{data.reading_time}min read</div>
            <div className={styles.date}>
              {moment(data.createdAt).format("MMM dd, YYYY")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogBlock;
