import React, { useState, useEffect } from "react";
import Footer from "../components/molecule/Footer";
import Navbar from "../components/molecule/Navbar";
import { useRouter } from "next/router";
import { cleanup } from "../Redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../utils";
import { addTheme, toggle, sideBar } from "../Redux/themeSlice";
import { logout } from "../Redux/authSlice";

const MainLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, menu } = useSelector((state) => state.theme);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTheme());
    deleteItem();
  }, [theme, menu]);

  // Closes navbar menu or page reload or navigate
  useEffect(() => {
    const handleRouteChange = () => {
      setToggleMenu(false);
      return dispatch(cleanup());
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  //DISPATCH SIDEBAR MENU ACTION
  const sideMenu = () => {
    setToggleMenu(false);
    dispatch(sideBar());
  };

  // handle the toggle dispatch to change theme
  const handleTheme = () => {
    dispatch(toggle());
  };
  //calls the logoutreducer to clear the user crendentials and cookie
  const handleLogout = () => {
    dispatch(logout());
  };
  //toggle burger menu
  const handleBurger = () => {
    //closes sidebar menu when burger menu is opened
    if (menu === "open") {
      dispatch(sideBar("close"));
    }
    if (toggleMenu === false) {
      return setToggleMenu(true);
    } else {
      return setToggleMenu(false);
    }
  };
  return (
    <div className={`${theme === "true" ? "dark" : "light"}`}>
      <Navbar
        handleTheme={handleTheme}
        handleLogout={handleLogout}
        toggleMenu={toggleMenu}
        handleBurger={handleBurger}
        sideMenu={sideMenu}
      />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
