import React from "react";
import styles from "@/styles/home/Home.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { TfiTag } from "react-icons/tfi";
import { useSelector } from "react-redux";
import "animate.css";
import Link from "next/link";
import { BiHome, BiUsb } from "react-icons/bi";

const Aside = () => {
  const { menu } = useSelector((state) => state.theme);
  return (
    <div className={`${styles.aside} ${menu === "open" ? styles.open : ""}`}>
      <div className={styles.social}>
        <div className={`${styles.top} animate__animated animate__backInLeft`}>
          <div>
            <BsTwitter style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <BsFacebook style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <BsLinkedin style={{ color: "#fff" }} className={styles.icon} />
          </div>
          <div>
            <AiTwotoneMail
              style={{ color: "#f4f4f4" }}
              className={styles.icon}
            />
          </div>
        </div>
        <div
          className={`${styles.bottom} animate__animated animate__backInRight`}
        >
          <div>
            <FaPinterestP style={{ color: "#fff" }} className={styles.icon} />
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/"}>
              <BiHome className={styles.ic} />
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <BiUsb className={styles.ic} />
              Latest
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <TfiTag className={styles.ic} />
              Saved
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Code of conduct</Link>
          </li>
          <li>
            <Link href={"/terms"}>Terms of service</Link>
          </li>
          <li>
            <Link href={"/privacy"}>Privacy policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
