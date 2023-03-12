import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "@/styles/molecules/Navbar.module.css";
import logo2 from "@/public/logo2.png";
import logo from "@/public/logo3.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout, cleanup } from "../../Redux/authSlice";
import { checkUserAndToken } from "../../utils/index";

export default function Navbar() {
  const [getuser, setGetUser] = useState(null);
  const [gettoken, setGetToken] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useSelector((state) => state.user);

  const router = useRouter();
  const dispatch = useDispatch();

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

  useEffect(() => {
    checkUserAndToken(setGetUser, setGetToken);
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src={logo}
              width="150"
              height="150"
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
              <Link href="/write" passHref>
                Write
              </Link>
            </li>
            {/* {getuser && gettoken ? <li>Dashboard</li> : ""} */}
          </ul>

          {getuser && gettoken ? (
            <div className={styles.desktop}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
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
          )}
        </div>

        <div className={styles.mobile}>
          {toggleMenu && (
            <>
              <div
                className={`${styles.navbar_content_mobile} ${
                  toggleMenu ? styles.open : styles.close
                }`}
              >
                <ul className={styles.navbar_list}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/write">Write</Link>
                  </li>
                  <li>
                    <Link href="/">Dashboard</Link>
                  </li>
                </ul>
                {getuser && gettoken ? (
                  <div className={styles.navbar_button_mobile}>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
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
                )}
              </div>
            </>
          )}
          <div className={styles.navbar_menu_mobile}>
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size="2rem"
                style={{ zIndex: "9999" }}
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
