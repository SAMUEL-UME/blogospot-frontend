import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMoonFill, RiSunFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import styles from "@/styles/molecules/Navbar.module.css";
import logo2 from "@/public/logo2.png";
import logo from "@/public/logo3.png";
import profile from "@/public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { checkUserAndToken } from "../../utils/index";

export default function Navbar({
  handleTheme,
  handleLogout,
  handleBurger,
  toggleMenu,
  sideMenu,
}) {
  const [getuser, setGetUser] = useState(null);
  const [gettoken, setGetToken] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { theme, menu } = useSelector((state) => state.theme);
  const router = useRouter();

  // checks if a authenticated by getting the user Credential and token from localStorage
  useEffect(() => {
    checkUserAndToken(setGetUser, setGetToken);
  }, [user, theme, menu]);

  return (
    <div
      className={`${styles.navbar_container} ${
        theme === "true" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          {router.pathname == "/" ? (
            <div className={styles.navbar_logo_sidemenu} onClick={sideMenu}>
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
        {!getuser && !gettoken ? (
          <div className={styles.navbar_signed}>
            <ul>
              <li>
                <Link href={"/write"}>create post</Link>
              </li>
              {toggleMenu ? (
                <li onClick={handleTheme}>
                  {theme === "true" ? (
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
                {theme === "true" ? (
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
