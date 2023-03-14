import React from "react";
import styles from "@/styles/template/Post/Post.module.css";
import Image from "next/image";
const Post = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <Image src={data.image} alt="blog"  fill/> */}
     
    </div>
  );
};

export default Post;
