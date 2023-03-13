import React from "react";
import moment from "moment";
import styles from "@/styles/template/Post/posts.module.css";
import Link from "next/link";
import Image from "next/image";
import { TfiTag } from "react-icons/tfi";
import { RiHeart2Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";

const Posts = ({ data }) => {
  const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
  return (
    <div>
    {!loading ? (
      <React.Fragment>
      {data?.map((data) => (
        <div className={styles.blog} key={data._id}>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <Image src={data.image} alt="user" fill />
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
                  <RiHeart2Line size="1.5rem" className={styles.react_icon} />
                  <p>
                    5 <span>Reaction</span>
                  </p>
                </div>
                <div>
                  <TbMessageCircle2 size="1.5rem" className={styles.react_icon} />
                  <p>
                    3 <span>Comment</span>
                  </p>
                </div>
              </div>
              <div className={styles.int_two}>
                <p>{data.reading_time} min read</p>
                <div>
                  <TfiTag size="2.5rem" className={styles.save} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </React.Fragment>
  ) : (
      <React.Fragment>
      {Array(12)
        .fill(0)
        .map((_, i) => (
            <div key={i} className="flex flex-col border border-gray-300 mb-4 rounded-lg shadow-sm animate-pulse">
                <div className="bg-gray-200 flex flex-row p-4 pb-1">
                   <div className="bg-gray-300 w-20 h-20 rounded-full justify-center items-center">                   
                   </div>
                   <div className="flex flex-col space-x-2 space-y-2">
                   <div className="bg-gray-300 w-32 h-4 mt-6 ml-2 rounded-lg"></div>
                   <div className="bg-gray-300 w-64 h-2 rounded-lg"></div>
                   </div>
                </div>
                <div className="bg-gray-200 p-6 pt-0 space-y-4 justify-center items-center m-0">
                  <div className="bg-gray-300 w-4/5 h-4 ml-20 pt-0 rounded-lg"></div>
                  <div className="bg-gray-300 w-4/5 h-4 ml-20 pt-0 rounded-lg"></div>
                  <div className="bg-gray-300 w-4/5 h-4 ml-20 pt-0  rounded-lg"></div>
                  <div className="bg-gray-300 w-32 h-4 ml-20 pt-0  rounded-lg"></div>
                  <div className="bg-gray-300 w-24 h-2 ml-20 rounded-lg"></div>
                </div>
              </div>
            ))}
      </React.Fragment>
      )}
    </div>
  );
};

export default Posts;
