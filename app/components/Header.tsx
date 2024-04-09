import styles from "./css/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__items}`}>
        <span>LOGO</span>
        <nav className={styles.header__nav}>
          <a href="#" className={styles.nav__links}>Tours</a>
          <a href="#" className={styles.nav__links}>Guides</a>
          <a href="#" className={styles.nav__links}>Hotels</a>
          <a href="#" className={styles.nav__links}>Restaurants</a>
        </nav>
      </div>
    </header>
  );
}