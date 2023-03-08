import React, { use, useState, useEffect } from "react";
import LoginPage from "../src/components/template/Login";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../src/Redux/authSlice";
import { useRouter } from "next/router";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { error, loading, msg } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (msg) {
      router.push("/");
    }
  }, [msg]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signinUser(state));
  };

  return (
    <LoginPage
      handleInputChange={handleInputChange}
      state={state}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  );
}
