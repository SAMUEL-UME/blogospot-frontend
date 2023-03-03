import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "@/styles/Navbar.module.css";
import logo from "@/public/logo.png";
import logo2 from "@/public/logo2.png";
import Image from "next/image";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo2} width="170" height="100" alt="logo" />
        </div>
        <div className={styles.content}>
          <ul>
            <li>Home</li>
            <li>Write</li>
            <li>Dashboard</li>
          </ul>
          <div className={styles.desktop}>
            <button>Login</button>
            <button className={styles.ani}>
              <span>Signup</span>
            </button>
          </div>
        </div>

        <div className={styles.mobile}>
          {toggleMenu && (
            <>
              <div className={styles.navbar_content_mobile}>
                <ul className={styles.navbar_list}>
                  <li>Home</li>
                  <li>Write</li>
                  <li>Dashboard</li>
                </ul>
                <div className={styles.navbar_button_mobile}>
                  <button>Login</button>
                  <button className={styles.ani}>
                    <span>Signup</span>
                  </button>
                </div>
              </div>
            </>
          )}
          <div className={styles.navbar_menu_mobile}>
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size="2rem"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#000"
                size="2rem"
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
