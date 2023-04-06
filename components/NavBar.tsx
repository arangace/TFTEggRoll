import React from "react";
import styles from "../styles/navBar.module.scss";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const handleDarkModeButtonClick = () => {};
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} href="/">
          <Image
            width="100"
            height="100"
            alt="TFT Egg Roll Logo"
            src="/images/logo-light.png"
          />
        </Link>
      </div>
      <ul className={styles.navContainer}>
        <li>
          <Link href="/About">About</Link>
        </li>
        {/* TODO later functionality */}
        {/* <li>
          <Link href="">Login</Link>
        </li>
        <li>
          <button
            onClick={handleDarkModeButtonClick}
            className={styles.darkModeButton}
          >
            DarkMode
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
