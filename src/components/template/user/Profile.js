import React from "react";
import moment from "moment/moment";
import styles from "../../../../styles/template/User/Profile.module.css";
import profile from "../../../../public/profile.jpg";
import Posts from "@/src/components/template/Post/Posts";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import "animate.css";

const Profile = ({ user, data }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${styles.profile} } ${
        theme === "true" ? styles.dark : styles.light
      }
`}
    >
      <div className={styles.container}>
        <div
          className={`${styles.top}  animate__animated animate__backInRight`}
        >
          <div>
            <div className={styles.profile_img}>
              <div>
                {user.image ? (
                  <Image
                    src={profile}
                    alt="profile"
                    className={styles.imgage}
                  />
                ) : (
                  <FaUserCircle className={styles.image} />
                )}
              </div>
            </div>
            <div className={styles.profile_details}>
              <h2>
                <span>{user.first_name}</span>
                <span>{user.last_name}</span>
              </h2>
              <div className={styles.social_links}>
                <div className={styles.box}>

                </div>
                <div className={styles.box}>
                  <BsFacebook className={styles.box_icon}/>
                </div>
                <div className={styles.box}>
                  <BsTwitter className={styles.box_icon}/>
                </div>
                <div className={styles.box}>
                  <BsLinkedin className={styles.box_icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.top_2}>
            <span>
              Joined <span>{moment(user.createdAt).format("MMM hh y")}</span>🎉
            </span>
            <div className={styles.top_2_fp}>
              <p>2 followers</p>
              <p>{data.length} posts</p>
            </div>
            <div className={styles.top_2_bio}>
              <span>Bio</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt necessitatibus similique nam provident
                quae dolore beatae aspernatur, tempore, obcaecati ad, nemo eius
                repudiandae. Maxime at a accusamus ratione laborum?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bt_aside}>
            <h1>Hellow</h1>
          </div>
          <div className={styles.bt_post}>
            <Posts data={data} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
