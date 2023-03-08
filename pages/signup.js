import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../src/Redux/authSlice";

import SignupPage from "../src/components/template/Signup";

const Signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signupUser(state));

    setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };

  return (
    <SignupPage
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
};

export default Signup;
