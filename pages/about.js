import React from "react";
import styles from "@/styles/template/About.module.css";
import { useSelector } from "react-redux";

const Aboutus = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${styles.main} ${
        theme === "true" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.content}>
        <div className={styles.head}>
          <h2>About page </h2>
        </div>
        <div className={styles.middlecontent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            molestie massa in euismod porttitor. Praesent in consequat odio.
            <br />
            Nullam ac laoreet lorem, eget condimentum metus. Sed rutrum
            scelerisque lacus.
          </p>
        </div>
        <div className={styles.bottomcontent}>
          <h1>Thank you ❤ </h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
