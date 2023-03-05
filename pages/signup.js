import React, { useState } from "react";

import SignupPage from "../src/components/template/Signup";

const signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return <SignupPage handleInputChange={handleInputChange} state={state} />;
};

export default signup;
