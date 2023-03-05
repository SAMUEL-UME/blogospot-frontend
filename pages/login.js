import React, { useState } from "react";
import LoginPage from "../src/components/template/Login";

export default function Login() {
  const [state, setState] = useState({
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

  return <LoginPage handleInputChange={handleInputChange} state={state} />;
}


