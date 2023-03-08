import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../src/Redux/authSlice";
import { useRouter } from "next/router";
import { removeQuotes } from "../src/utils";

import SignupPage from "../src/components/template/Signup";

const Signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

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
  }, [msg]);

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
    <SignupPage
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      state={state}
      error={error}
      loading={loading}
    />
  );
};

export default Signup;
