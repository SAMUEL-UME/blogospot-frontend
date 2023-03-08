import React, { useEffect } from "react";
import CreateBlog from "../src/components/template/CreateBlog";
import { useRouter } from "next/router";

const Write = () => {
  const router = useRouter();

  function checkUserAndToken() {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!user || !token) {
      router.push("/login");
    }
  }
  useEffect(() => {
    checkUserAndToken();
  });
  return (
    <div>
      <CreateBlog />
    </div>
  );
};

export default Write;
