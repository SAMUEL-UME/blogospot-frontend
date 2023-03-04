
import React, { useState, useEffect } from "react";
import styles from "@/styles/Footer.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import Aboutus from "../../../pages/Aboutus";
import Terms from "../../../pages/Terms"
import Privacy from "../../../pages/Privacy"

const Footer = () => {
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
    <div className={styles.footer}>
    <div className={styles.container}>
      
      <div className={styles.textarea}> 
      
     <ul className={styles.listitem}>
      <li> <Link href="/Aboutus" passHref>
                About us
              </Link></li>
      <li>Contact</li>
      <li><Link href="/Privacy" passHref>
               Privacy policy
              </Link></li>
      <li> <Link href="/Terms" passHref>
               Terms&condition
              </Link></li>
     </ul>
    
      </div>
    
   
    </div>

    </div>
  )
}

export default Footer
