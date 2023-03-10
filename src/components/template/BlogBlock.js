import React from "react";
import moment from "moment";
import styles from "@/styles/home/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { TfiTag } from "react-icons/tfi";

const BlogBlock = ({ data }) => {
  return (
    <div>
      {data?.map((data) => (
        <Link key={data._id} href={`post/${data._id}`}>
          {/* <div className={styles.blog}>
            <div className={styles.thumb}>
              {data.read_count > 0 ? <p>{data.read_count} views</p> : ""}
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
                {moment(data.createdAt).format("MMM dd, hh")}
              </div>
            </div>
            TfiTag
          </div> */}
          <div className={styles.blog}>
            <div className={styles.user}>
              <Image src={data.image} alt="user" width={50} height={50} />
              <div>
                <p>samuel</p>
                <p>{moment(data.createdAt).fromNow()}</p>
              </div>
            </div>
            <div className={styles.content}>
              <h1>{data.title}</h1>
              <div className={styles.content_tag}>
                {data.tags?.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <div className={styles.content_int}>
                <div className={styles.int_one}>
                  <p>come</p>
                  <p>come</p>
                </div>
                <div className={styles.int_two}>
                  <p>{data.reading_time}min read</p>
                  <p>
                    <TfiTag fontSize={"20px"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogBlock;
