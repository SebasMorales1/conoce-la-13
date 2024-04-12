"use client"

import styles from "./css/Header.module.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
        <Link href="#">
          <img
            className={styles.logo}
            src="./logo.png"
            alt="Logo"
          />
        </Link>
        <nav 
          className={`${styles.header__nav}${showNav ? " " + styles.header__nav_active : ""}`}
          ref={navRef}
        >
          <button className={styles.header__btn} onClick={() => handleClick(false)}>
            <img className={styles.xicon} src="./x.svg" alt="x icon" />
          </button>
          <Link
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Tours
          </Link>
          <Link
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Guides
          </Link>
          <Link
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Hotels
          </Link>
          <Link
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Gallery
          </Link>
          <Link
            href="#"
            className={styles.nav__links}
            onClick={() => handleClick(false)}
          >
            Restaurants
          </Link>
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