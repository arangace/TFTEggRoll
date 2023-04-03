import React from "react";
import styles from "../styles/navBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Link href="">Logo</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
