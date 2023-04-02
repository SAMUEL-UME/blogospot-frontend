import React from "react";
import styles from "@/styles/home/Home.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import "animate.css";

const Aside = () => {
  const { menu } = useSelector((state) => state.theme);
  return (
    <div className={`${styles.aside} ${menu === "open" ? styles.open : ""}`}>
      <div className={styles.social}>
        <div
          className={`${styles.top} animate__animated animate__backInLeft        `}
        >
          <div>
            <BsTwitter style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <BsFacebook style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <BsLinkedin style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <AiTwotoneMail
              style={{ color: "#f4f4f4" }}
              className={styles.icon}
            />
          </div>
        </div>
        <div
          className={`${styles.bottom} animate__animated animate__backInRight`}
        >
          <div>
            <FaPinterestP style={{ color: "#fff" }} className={styles.icon} />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Aside;
