import React from "react";
import styles from "../styles/navBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div>Logo</div>
      <div>About</div>
      <div>Login?</div>
    </nav>
  );
};

export default NavBar;
