import React, { useState, useEffect } from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";
import { useSelector } from "react-redux";
import { getTheme } from "../utils";

const MainLayout = ({ children }) => {
  const [darktheme, setDarkTheme] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    getTheme(setDarkTheme);
  }, [theme, darktheme]);

  return (
    <div className={`${darktheme ? "dark" : "light"}`}>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
