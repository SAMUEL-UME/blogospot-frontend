import React from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
