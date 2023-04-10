import React, { useState, useEffect, useCallback } from "react";
import {
  RiCloseLine,
  RiMoonFill,
  RiSunFill,
  RiDashboardFill,
} from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaPenSquare } from "react-icons/fa";
import { FiMenu, FiSettings, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import styles from "@/styles/molecules/Navbar.module.css";
import logo2 from "@/public/logo2.png";
import logo from "@/public/logo3.png";
import profile from "@/public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { checkUserAndToken } from "../../utils/index";

export default function Navbar(props) {
  const [getuser, setGetUser] = useState(null);
  const [gettoken, setGetToken] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const { theme, menu } = useSelector((state) => state.theme);
  const router = useRouter();

  const { handleTheme, handleLogout, handleBurger, toggleMenu, sideMenu } =
    props;

  // checks if authenticated by getting the user credential and token from localStorage
  useEffect(() => {
    checkUserAndToken(setGetUser, setGetToken);
  }, [user, theme, menu]);

  const memoizedHandleTheme = useCallback(() => {
    handleTheme();
  }, [handleTheme]);

  const memoizedHandleLogout = useCallback(() => {
    handleLogout();
  }, [handleLogout]);

  const memoizedHandleBurger = useCallback(() => {
    handleBurger();
  }, [handleBurger]);

  const memoizedSideMenu = useCallback(() => {
    sideMenu();
  }, [sideMenu]);

  return (
    <div
      className={`${styles.navbar_container} ${
        theme === "true" ? styles.dark : styles.light
      } animate__animated animate__backInDown ${
        router.pathname === "/write" ? "hidden" : ""
      } `}
    >
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          {router.pathname == "/" ? (
            <div
              className={styles.navbar_logo_sidemenu}
              onClick={memoizedSideMenu}
            >
              <RiCloseLine
                className={`${styles.navbar_logo_menu} ${
                  menu === "open" ? styles.display : ""
                }`}
              />
              <FiMenu
                className={`${styles.navbar_logo_menu} ${
                  menu === "close" ? styles.display : ""
                }`}
              />
            </div>
          ) : (
            ""
          )}
          <Link href="/" passHref>
            {theme === "true" ? (
              <Image
                src={logo}
                width="120"
                height="120"
                alt="auto"
                priority="true"
              />
            ) : (
              <Image
                src={logo2}
                width="120"
                height="120"
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
                <li onClick={memoizedHandleTheme}>
                  {theme === "true" ? (
                    <RiSunFill
                      className={`${styles.sun} animate__animated animate__rotateIn`}
                    />
                  ) : (
                    <RiMoonFill
                      className={`${styles.moon} animate__animated animate__rotateIn`}
                    />
                  )}
                </li>
              ) : (
                ""
              )}

              <li className={styles.user} onClick={memoizedHandleBurger}>
                <div className={styles.image_container}>
                  {user !== null && user.image ? (
                    <Image
                      src={profile}
                      alt="profile"
                      className={styles.image}
                    />
                  ) : (
                    <FaUserCircle className={styles.image} />
                  )}
                </div>
                {toggleMenu ? (
                  <div
                    className={`${styles.menu} animate__animated  animate__backInRight`}
                  >
                    <div className={styles.menu_con}>
                      <div className={styles.top}>
                        <Link href={`/${getuser.username}`}>
                          <span>{`${getuser.first_name} ${getuser.last_name}`}</span>
                          <span>@{getuser.username}</span>
                        </Link>
                      </div>
                      <div className={styles.center}>
                        <Link href={"/Dashboard"}>
                          <RiDashboardFill
                            className={`${styles.center_icon} `}
                          />
                          Dashboard
                        </Link>
                        <Link href={"/write"}>
                          <FaPenSquare className={`${styles.center_icon} `} />
                          Create post
                        </Link>
                        <Link href={"/savedlist"}>
                          <BsFillJournalBookmarkFill
                            className={`${styles.center_icon} `}
                          />
                          Reading list
                        </Link>
                        <Link href={"/settings"}>
                          <FiSettings className={`${styles.center_icon} `} />
                          Setting
                        </Link>
                      </div>
                      <div className={styles.bottom}>
                        <span onClick={memoizedHandleLogout}>
                          <FiLogOut className={`${styles.center_icon} `} />
                          Sign out
                        </span>
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
              <li onClick={memoizedHandleTheme}>
                {theme === "true" ? (
                  <RiSunFill
                    className={`${styles.sun}  animate__animated animate__rotateIn`}
                  />
                ) : (
                  <RiMoonFill
                    className={`${styles.moon} animate__animated animate__rotateIn`}
                  />
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
