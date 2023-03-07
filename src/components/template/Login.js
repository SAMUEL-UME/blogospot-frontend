<<<<<<< HEAD
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add logic to submit form data to backend API or database
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Log In</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder= "Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <p>Don't have an account?</p>
          <a href="" className="text-orange-800">
            SignUp!
          </a>
        </div>
      </form>
=======
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
>>>>>>> main
    </div>
  );
}
