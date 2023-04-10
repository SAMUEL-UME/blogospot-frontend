import React from "react";
import styles from "@/styles/auth/Login.module.css";
import Link from "next/link";
import loader from "@/public/loader.gif";
import Image from "next/image";

export default function SigninPage({
  handleInputChange,
  state,
  handleSubmit,
  error,
  loading,
  theme,
}) {
  return (
    <div
      className={`${styles.login_container}  ${
        theme === "true" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.login_box}>
        <p>Sign in</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.user_box}>
            <input
              required={true}
              name="email"
              type="text"
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
          {error && <p className={styles.error}>{error}</p>}
          {loading ? (
            <Image src={loader} width={40} height={20} alt="loader" />
          ) : (
            <button type="submit" disabled={loading}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign in
            </button>
          )}
        </form>
        <p>
          Don&apos;t have an account?
          <Link href="/signup" className={styles.a2}>
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}
