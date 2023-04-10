import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import LoginPage from "../src/components/Auth/Signin";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../src/Redux/authSlice";
import { useRouter } from "next/router";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { error, loading, msg } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (msg) {
      router.push("/");
    }
  }, [msg, router]);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(signinUser(state));
    },
    [dispatch, state]
  );

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <LoginPage
        handleInputChange={handleInputChange}
        state={state}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
        theme={theme}
      />
    </>
  );
}
