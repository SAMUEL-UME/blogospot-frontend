import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import styles from "@/styles/user/Profile.module.css";
import profile from "@/public/profile.jpg";
import Posts from "@/src/components/Post/Posts";
import Image from "next/image";
import { getUser } from "@/src/utils";
import { FaUserCircle, FaLessThan, FaGreaterThan } from "react-icons/fa";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";

const Profile = ({ user, data }) => {
  const [expand, setExpand] = useState("close");
  const [loggedInUser, setLoggedInUser] = useState();
  const [userToken, setUserToken] = useState();
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    getUser(setLoggedInUser, setUserToken);
  }, [user]);

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
                  <BsGithub className={styles.box_icon} />
                </div>
                <div className={styles.box}>
                  <BsFacebook className={styles.box_icon} />
                </div>
                <div className={styles.box}>
                  <BsTwitter className={styles.box_icon} />
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
              <div>
                <p>2 followers</p>
                <p>
                  <Link href="#post">{data.length} posts</Link>
                </p>
              </div>
              <div>
                <span>Follow</span>
              </div>
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
          <div className={styles.btm_show}>
            {expand === "close" ? (
              <p
                className={`${styles.exp} animate__animated animate__backInLeft`}
                onClick={() => setExpand("open")}
              >
                <MdOutlineExpandLess size={"1.2rem"} />
                show more
                <MdOutlineExpandMore size={"1.2rem"} />
              </p>
            ) : (
              <p
                className={`${styles.red} animate__animated animate__backInRight`}
                onClick={() => setExpand("close")}
              >
                <FaLessThan size={"0.8rem"} />
                Show less
                <FaGreaterThan size={"0.8rem"} />
              </p>
            )}
          </div>
          <div
            className={`${
              styles.bt_aside
            } animate__animated animate__backInLeft  ${
              expand === "open" && styles.aside_show
            }`}
          >
            <ul className={styles.bt_aside_btm}>
              <div>
                {user.learning ? (
                  <>
                    <p>Current learning 📜</p>
                    {user.learning &&
                      user.learning.map((item, i) => (
                        <li key={i}>
                          <span>*</span> {item}
                        </li>
                      ))}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                {user.building ? (
                  <>
                    <p>currently building 🛠</p>
                    <li>
                      <span>*</span> {user.building}
                    </li>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                {user.hobbies ? (
                  <>
                    <p>Hobbies 🍕</p>
                    {user.hobbies &&
                      user.hobbies.map((hobbie, i) => (
                        <li key={i}>
                          <span>*</span> {hobbie}
                        </li>
                      ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            </ul>
            <ul className={styles.bt_aside_top}>
              <li>{user.followers} Followers</li>
              <li>{user.following} Following</li>
              <li>{user.comments} Comments</li>
              {userToken && loggedInUser.username === user.username ? (
                <li>Edit Profile</li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className={styles.bt_post} id="post">
            {data.length > 0 ? (
              <Posts data={data} theme={theme} />
            ) : (
              <p className={styles.bt_post_p}>No post yet...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
