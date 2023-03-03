import React from "react";
import styles from "@/styles/Login.module.css";

const login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <p>Login</p>
        <form>
          <div className={styles.user_box}>
            <input required={true} name="email" type="text" />
            <label>Email</label>
          </div>
          <div className={styles.user_box}>
            <input required={true} name="password" type="password" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <a href="" className={styles.a2}>
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default login;
