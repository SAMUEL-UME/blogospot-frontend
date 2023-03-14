import React, { useEffect, useState } from "react";
import CreateBlog from "../src/components/template/Post/CreatePost";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { checkUserAndToken } from "../src/utils";

const Write = () => {
  const [getUser, setGetUser] = useState(null);
  const [getToken, setGetToken] = useState(null);
  const { user } = useSelector((state) => state.user);
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
  useEffect(() => {
    checkUserAndToken(setGetUser, setGetToken);
  }, [user]);

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
  const router = useRouter();

  return (
    <div>
      <CreateBlog
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        state={state}
      />
    </div>
  );
};

export default Write;
