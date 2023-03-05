import React from "react";
import styles from "@/styles/auth/Login.module.css";
import Link from "next/link";

export default function LoginPage({ handleInputChange, state }) {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <p>Login</p>
        <form>
          <div className={styles.user_box}>
            <input
              required={true}
              name="email"
              type="email"
              value={state.email}
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className={styles.user_box}>
            <input
              required={true}
              name="password"
              type="password"
              value={state.password}
              onChange={handleInputChange}
            />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className={styles.a2}>
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}
