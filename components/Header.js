import { useState } from "react";
import Anchor from "./Anchor";
import styles from "../styles/Header.module.css";

function Header() {
  const [state, setState] = useState("close");

  const openClose = () => {
    if (state == "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Anchor className={styles.logo_large} href="/">
          greenmark
        </Anchor>
        <Anchor className={styles.logo_small} href="/">
          GM
        </Anchor>
        <div className={styles.burger_wrapper} onClick={openClose}>
          <div className={styles.hamburger + " " + styles[state]}></div>
        </div>
      </nav>
      <div className={styles.menu + " " + styles[state]}>
        <ul className={styles.menu_links}>
          <div className={styles.menu_links_wrapper} onClick={() => setState("close")}>
            <Anchor href="/">Home</Anchor>
            <Anchor href="/tickets">Tickets</Anchor>
            <Anchor href="/program">Program</Anchor>
            <Anchor href="/schedule">Schedule</Anchor>
            <Anchor href="/contact">Contact</Anchor>
            <Anchor href="/about">About</Anchor>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
