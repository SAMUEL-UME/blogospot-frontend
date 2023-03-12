import React, { useState, useEffect } from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";
import { Provider } from "react-redux";
import store from "@/src/Redux/store";

const MainLayout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </Provider>
    </>
  );
};

export default MainLayout;
