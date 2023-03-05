import React, { useState, useEffect } from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Aboutus from "../../../pages/Aboutus";
import Terms from "../../../pages/Terms";
import Privacy from "../../../pages/Privacy";
import logo from "@/public/logo3.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.container_footer}>
        <div className={styles.footer_heading}>
          <Image
            src={logo}
            width="200"
            height="200"
            alt="auto"
            priority="true"
          />
        </div>
        <div className={styles.footer_content}>
          <div>
            <h2 className={styles.footer_content_heading}>About</h2>
            <ul>
              <li>Blog</li>
              <li>Team</li>
              <li></li>
              <li>item 4</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footer_content_heading}>Social</h2>
            <ul>
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.footer_content_heading}>Privacy</h2>
            <ul>
              <li>Terms & condition</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className={styles.term}>
          <div>
            <p>@2023 Blogospot all right reserved &copy;</p>
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
