import React from "react";
import styles from "@/styles/auth/Signup.module.css";
import Link from "next/link";
import loader from "@/public/loader.gif";
import Image from "next/image";

export default function SignupPage({
  handleInputChange,
  state,
  handleSubmit,
  error,
  loading,
  darktheme,
}) {
  console.log(error);
  return (
    <div
      className={`${styles.login_container}   ${
        darktheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.login_box}>
        <p>Signup</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.col}>
            <div className={styles.user_box}>
              <input
                required={true}
                name="first_name"
                type="text"
                value={state.first_name}
                onChange={handleInputChange}
              />
              <label>Firstname</label>
            </div>
            <div className={styles.user_box}>
              <input
                required={true}
                name="last_name"
                type="text"
                value={state.last_name}
                onChange={handleInputChange}
              />
              <label>Lastname</label>
            </div>
          </div>
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
              name="username"
              type="text"
              value={state.username}
              onChange={handleInputChange}
            />
            <label>Username</label>
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

            {error && <p className={styles.error}>{error}</p>}
          </div>
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
          Have an account?{" "}
          <Link href="/login" className={styles.a2}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
