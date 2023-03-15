import React, { useState, useEffect } from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getTheme, deleteItem } from "../utils";
import { addTheme } from "../Redux/themeSlice";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTheme());
    deleteItem();
  }, [theme]);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
