import React from "react";
import styles from "../../../../styles/template/User/Profile.module.css";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Moment } from "moment/moment";
const Profile = ({ data }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${styles.profile} } ${
        theme === "true" ? styles.dark : styles.light
      }
`}
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <div className={styles.profile_img}>
              <div>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className={styles.img}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg> */}
                <Image src={profile} alt="profile" className={styles.imgage} />
              </div>
            </div>
            <div className={styles.profile_details}>
              <h2>
                <span>{data.first_name}</span>
                <span>{data.last_name}</span>
              </h2>
              <div className={styles.social_links}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
              </div>
            </div>
          </div>
          <div className={styles.top_2}>
            <span>
              Joined <span>Nov 3</span>🎉
            </span>
            <div className={styles.top_2_fp}>
              <p>2 followers</p>
              <p>3 posts</p>
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
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default Profile;
