import React, { useState, useEffect } from "react";
import styles from "@/styles/molecules/Footer.module.css";
import Link from "next/link";
import logo from "@/public/logo3.png";
import logo2 from "@/public/logo2.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const Footer = () => {
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  console.log(user);

  const router = useRouter();

  return (
    <div
      className={`${styles.footer}  ${
        theme === "true" ? styles.dark : styles.light
      } ${router.pathname === "/write" ? styles.hide : ""}`}
    >
      <div className={styles.container_footer}>
        <div className={styles.footer_heading}>
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
        <div className={styles.footer_content}>
          <div>
            <h2 className={styles.footer_content_heading}>About</h2>
            <ul>
              <li>
                <Link href={"/about"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Team</Link>
              </li>
              <li>
                <Link href={"/"}>item 4</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footer_content_heading}>Social</h2>
            <ul>
              <li>
                <Link href={"/"}>Linkedin</Link>
              </li>
              <li>
                <Link href={"/"}>Twitter</Link>
              </li>
              <li>
                <Link href={"/"}>Facebook</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footer_content_heading}>Privacy</h2>
            <ul>
              <li>
                <Link href={"/terms"}>Terms & condition</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.term}>
          <div>
            <p>@2023 Blogospot - all &copy; right reserved </p>
          </div>
          <div>
            <p>All system operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
