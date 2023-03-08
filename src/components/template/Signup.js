import React from "react";
import styles from "@/styles/auth/Signup.module.css";
import Link from "next/link";

export default function SignupPage({
  handleInputChange,
  state,
  handleSubmit,
  error,
  loading,
}) {
  console.log(error);
  return (
    <div className={styles.login_container}>
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
              type="email"
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
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Signup
          </button>
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
