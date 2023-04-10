import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import SignupPage from "../src/components/Auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../src/Redux/authSlice";
import { useRouter } from "next/router";
import { removeQuotes } from "../src/utils";

const Signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, loading, msg } = useSelector((state) => state.auth);

  if (error) {
    removeQuotes(error);
  }

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
      dispatch(signupUser(state));
    },
    [dispatch, state]
  );

  useEffect(() => {
    if (msg) {
      router.push("/");
    }
  }, [msg, router, theme]);

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <SignupPage
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        state={state}
        error={error}
        loading={loading}
        theme={theme}
      />
    </>
  );
};

export default Signup;
