import React from "react";
import styles from "@/styles/template/About.module.css";

const Aboutus = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.head}>
          <h2>About page </h2>
        </div>
        <div className={styles.middlecontent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
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
