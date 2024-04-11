"use client"

import styles from "./css/Header.module.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false)
  const navRef = useRef<null | HTMLDivElement>(null)

  function handleClick(value: boolean): void {
    setShowNav(value);
  }

  useEffect(() => {
    const body = document.body

    function closeNav(event: MouseEvent): void {
      if (navRef && event.target !== navRef.current) {
        body.removeEventListener("click", closeNav); // remove event when the nav is showed
        handleClick(false);
      }
    }

    if (showNav)
      body.addEventListener("click", closeNav);
  }, [showNav])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__items}`}>
        <span>LOGO</span>
        <nav 
          className={`${styles.header__nav}${showNav ? " " + styles.header__nav_active : ""}`}
          ref={navRef}
        >
          <button className={styles.header__btn} onClick={() => handleClick(false)}>
            <img className={styles.xicon} src="./x.svg" alt="x icon" />
          </button>
          <a
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Tours
          </a>
          <a
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Guides
          </a>
          <a
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Hotels
          </a>
          <a
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Gallery
          </a>
          <a
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Restaurants
          </a>
        </nav>
        <button 
          className={`${styles.header__btn} ${styles.header__btn_menu}`}
          onClick={() => handleClick(true)}
        >
          <img className={styles.list_icon} src="./list.svg" alt="list icon" />
        </button>
      </div>
    </header>
  );
}