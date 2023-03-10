import React from "react";
import moment from "moment";
import styles from "@/styles/template/Post/posts.module.css";
import Link from "next/link";
import Image from "next/image";
import { TfiTag } from "react-icons/tfi";
import { RiHeart2Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";


const Posts = ({ data, darktheme }) => {
  const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
  return (
 <div className={`${darktheme ? styles.dark : styles.light}`}>
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
      </React.Fragment>
  ) : (
      <React.Fragment>
      {Array(12)
        .fill(0)
        .map((_, i) => (
            <div key={i} className={`${styles.blog} flex flex-col bg-[#171717] mb-4 rounded-lg shadow-sm animate-pulse`}>
                <div className="flex flex-row p-4 pb-1">
                   <div className="bg-[#a8201a]/20 rounded-full h-[40px] w-[40px] flex justify-center items-center">  
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                   <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                       />
                   </svg>                 
                   </div>
                   <div className="flex flex-col space-x-2 space-y-2">
                   <div className="bg-[#a8201a]/20 w-32 h-3 mt-2 ml-2 rounded-lg"></div>
                   <div className="bg-[#a8201a]/20 w-64 h-2 rounded-lg"></div>
                   </div>
                </div>
                <div className="p-6 pt-3 space-y-4 justify-center items-center">
                  <div className="bg-[#a8201a]/20 w-4/5 h-4 ml-10 pt-0 rounded-lg"></div>
                  <div className="bg-[#a8201a]/20 w-4/5 h-4 ml-10 pt-0 rounded-lg"></div>
                <div className="p-6 ml-5 mt-10 pt-6 flex justify-between items-center w-1/2">
                  <div className="bg-[#a8201a]/20 w-24 h-2 rounded-lg items-end"></div>
                  <div className="bg-[#a8201a]/20 w-24 h-2 rounded-lg items-end"></div>
                </div>
                </div>
                <div className="flex justify-between p-6 pt-1">
                <div className="pt-0 flex justify-start gap-14 items-center w-[50%]">
                  <div className="bg-[#a8201a]/20 w-24 h-5 ml-10 rounded-lg items-end"></div>
                  <div className="bg-[#a8201a]/20 w-24 h-5 rounded-lg items-end"></div>
                  </div>
                  <div className="bg-[#a8201a]/20 w-16 h-5 rounded-lg items-end pr-10"></div>
                </div>
              </div>
            ))}
      </React.Fragment>
      )}
    </div>
  );
};

export default Posts;
