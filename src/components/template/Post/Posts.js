import React from "react";
import moment from "moment";
import styles from "@/styles/template/Post/posts.module.css";
import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";
import { TfiTag } from "react-icons/tfi";
import { RiHeart2Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";

const Posts = ({ data, theme }) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);
  return (
    <div className={`${theme === "true" ? styles.dark : styles.light}`}>
      {loading ? (
        <>
          {data?.map((data) => (
            <div className={styles.blog} key={data._id}>
              <div className={styles.user}>
                <div className={styles.user_img}>
                  <Image src={data.image} alt="user" fill={true} />
                </div>
                <div>
                  <h2>samuel</h2>
                  <p>
                    {moment(data.createdAt).format("MMMM hh")} (
                    {moment(data.createdAt).fromNow()})
                  </p>
                </div>
              </div>
              <div className={styles.content}>
                <Link href={`/post/${data._id}`}>
                  <h1>{data.title}</h1>
                </Link>
                <div className={styles.content_tag}>
                  {data.tags?.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <div className={styles.content_int}>
                  <div className={styles.int_one}>
                    <div>
                      <RiHeart2Line
                        size="1.5rem"
                        className={styles.react_icon}
                      />
                      <p>
                        5 <span>Reaction</span>
                      </p>
                    </div>
                    <div>
                      <TbMessageCircle2
                        size="1.5rem"
                        className={styles.react_icon}
                      />
                      <p>
                        3 <span>Comment</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.int_two}>
                    <p>{data.reading_time} min read</p>
                    <div>
                      <TfiTag size="2rem" className={styles.save} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <Loading key={i} />
            ))}
        </>
      )}
    </div>
  );
};

export default Posts;
