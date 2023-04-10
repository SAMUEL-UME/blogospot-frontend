  import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";

const Write = () => {
  const CreateBlog = dynamic(
    () => import("../src/components/Post/CreatePost"),
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

  const getUserAndToken = useCallback(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!user || !token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    getUserAndToken();
  }, [getUserAndToken]);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
  }, []);

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
