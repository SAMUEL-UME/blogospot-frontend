import React, { useState, useEffect } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";
import styles from "@/styles/molecules/Navbar.module.css";
import logo2 from "@/public/logo2.png";
import logo from "@/public/logo3.png";
import profile from "@/public/profile.jpg";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout, cleanup } from "../../Redux/authSlice";
import { toggle } from "../../Redux/themeSlice";
import { checkUserAndToken, getTheme } from "../../utils/index";

export default function Navbar() {
  const [getuser, setGetUser] = useState(null);
  const [gettoken, setGetToken] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darktheme, setDarkTheme] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const router = useRouter();
  const dispatch = useDispatch();

  // Closes navbar menu or page reload or navigate
  useEffect(() => {
    const handleRouteChange = (url) => {
      setToggleMenu(false);
      return dispatch(cleanup());
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // checks if a authenticated by getting the user Credential and token from localStorage
  useEffect(() => {
    checkUserAndToken(setGetUser, setGetToken);
  }, [user]);

  // Get the theme from localStorage
  useEffect(() => {
    console.log(toggleMenu);
    getTheme(setDarkTheme);
  }, [theme, darktheme]);

  // handle the toggle dispatch to change theme
  const handleTheme = () => {
    dispatch(toggle());
  };
  //calls the logoutreducer to clear the user crendentials and cookie
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleBurger = () => {
    console.log(toggleMenu);
    if (toggleMenu === false) {
      return setToggleMenu(true);
    } else {
      return setToggleMenu(false);
    }
  };

  return (
    <div
      className={`${styles.navbar_container} ${
        darktheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link href="/" passHref>
            {darktheme ? (
              <Image
                src={logo}
                width="150"
                height="150"
                alt="auto"
                priority="true"
              />
            ) : (
              <Image
                src={logo2}
                width="150"
                height="150"
                alt="auto"
                priority="true"
              />
            )}
          </Link>
        </div>
        {getuser && gettoken ? (
          <div className={styles.navbar_signed}>
            <ul>
              <li>
                <Link href={"/write"}>create post</Link>
              </li>
              {toggleMenu ? (
                <li onClick={handleTheme}>
                  {darktheme ? (
                    <RiSunFill className={styles.sun} />
                  ) : (
                    <RiMoonFill className={styles.moon} />
                  )}
                </li>
              ) : (
                ""
              )}

              <li className={styles.user} onClick={handleBurger}>
                <div className={styles.image_container}>
                  <Image src={profile} alt="profile" className={styles.image} />
                </div>
                {toggleMenu ? (
                  <div className={styles.menu}>
                    <div className={styles.menu_con}>
                      <div className={styles.top}>
                        <Link href={"/user"}>
                          <span>Samuel Ume</span>
                          <span>@samuelume</span>
                        </Link>
                      </div>
                      <div className={styles.center}>
                        <Link href={"/Dashboard"}>Dashboard</Link>
                        <Link href={"/write"}>Create post</Link>
                        <Link href={"/savedlist"}>Reading list</Link>
                        <Link href={"/settings"}>Setting</Link>
                      </div>
                      <div className={styles.bottom}>
                        <span onClick={handleLogout}>Sign out</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.navbar_usigned}>
            <ul>
              <li>
                <Link href={"/login"}>Sign in</Link>
              </li>
              <li onClick={handleTheme}>
                {darktheme ? (
                  <RiSunFill className={styles.sun} />
                ) : (
                  <RiMoonFill className={styles.moon} />
                )}
              </li>
              <li className={styles.ani}>
                <Link href={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
