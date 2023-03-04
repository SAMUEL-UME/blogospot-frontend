import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "@/styles/Navbar.module.css";
import logo2 from "@/public/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ isScrolled }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("Navigating to", url);
      return setToggleMenu(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div
      className={`${styles.navbar_container} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src={logo2}
              width="150"
              height="auto"
              alt="auto"
              priority="true"
            />
          </Link>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/Write" passHref>
                Write
              </Link>
            </li>
            <li>Dashboard</li>
          </ul>
          <div className={styles.desktop}>
            <button>
              <Link href="/login" passHref>
                Login
              </Link>
            </button>

            <button className={styles.ani}>
              <span>
                <Link href="/signup" passHref>
                  Signup
                </Link>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.mobile}>
          {toggleMenu && (
            <>
              <div className={styles.navbar_content_mobile}>
                <ul className={styles.navbar_list}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Write">Write</Link>
                  </li>
                  <li>
                    <Link href="/">Dashboard</Link>
                  </li>
                </ul>
                <div className={styles.navbar_button_mobile}>
                  <button>
                    <Link href="/login" passHref>
                      Login
                    </Link>
                  </button>
                  <button className={styles.ani}>
                    <span>
                      <Link href="/signup" passHref>
                        Signup
                      </Link>
                    </span>
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
