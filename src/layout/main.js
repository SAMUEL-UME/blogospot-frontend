import React, { useState, useEffect } from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // You now have access to `window`
      const isTop = window.scrollY > 0;
      setIsScrolled(isTop);
    }
  };
  useEffect(() => {
    console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container-class">
      <Navbar isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
