import React, { useState, useEffect, useCallback } from "react";
import Footer from "../components/biolerplate/Footer";
import Navbar from "@/src/components/biolerplate/Navbar";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../utils";
import "animate.css";
import { addTheme, toggle, sideBar } from "../Redux/themeSlice";
import { logout, setToken, setUser, cleanup } from "../Redux/authSlice";

const MainLayout = ({ children }) => {
  const { theme } = useSelector(({ theme }) => theme);

  const dispatch = useDispatch();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const router = useRouter();

  const handleRouteChange = useCallback(() => {
    setToggleMenu(false);
    dispatch(sideBar("close"));
    dispatch(cleanup());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addTheme());
    dispatch(setToken());
    dispatch(setUser());
    deleteItem();
  }, [dispatch]);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  const sideMenu = useCallback(() => {
    setToggleMenu(false);
    dispatch(sideBar());
    setSideBarMenu((prev) => !prev);
  }, [dispatch]);

  const handleTheme = useCallback(() => {
    dispatch(toggle());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleBurger = useCallback(() => {
    dispatch(sideBar("close"));
    setSideBarMenu(false);
    setToggleMenu((prev) => !prev);
  }, [dispatch]);

  if (!children) return null;

  return (
    <>
      <Navbar
        handleTheme={handleTheme}
        handleLogout={handleLogout}   
        toggleMenu={toggleMenu}
        handleBurger={handleBurger}
        sideBarMenu={sideBarMenu}
        sideMenu={sideMenu}
      />
      <main className={`main ${theme === "true" ? "dark" : "light"}`}>
        {children}
      </main>
      <Footer className="px-3" />
    </>
  );
};

export default MainLayout;
