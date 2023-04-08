import React, { useState, useEffect } from "react";
import Head from "next/head";
import SignupPage from "../src/components/template/Auth/Signup";
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
  const { error, loading, msg } = useSelector((state) => state.user);

  if (error) {
    removeQuotes(error);
  }
  //Checks if a user is signed up (if not redirect to home page)
  useEffect(() => {
    if (msg) {
      router.push("/");
    }
  }, [msg, theme]);

  //Handle user input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  //handle submit (calls dispatch function to signup user)
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupUser(state));
  };

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
