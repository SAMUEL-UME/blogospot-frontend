import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";

const Write = () => {
  const CreateBlog = dynamic(
    () => import("../src/components/template/Post/CreatePost"),
    {
      ssr: false,
    }
  );
  const router = useRouter();

  const [state, setState] = useState({
    title: "",
    description: "",
    body: "",
    tags: "",
  });

  function getUserAndToken() {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!user || !token) {
      router.push("/login");
    }
  }
  useEffect(() => {
    getUserAndToken();
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <div>
        <CreateBlog
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          state={state}
        />
      </div>
    </>
  );
};

export default Write;
