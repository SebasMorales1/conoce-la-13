import styles from "./css/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date(Date()).getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__content}`}>
        <picture className={styles.footer__picture}>
          <Image
            className={styles.footer__logo}
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            layout="responsive"
          />
        </picture>

        <div>
          <h3 className={styles.footer_subtitle}>Pages</h3>
          <ul className={styles.footer__links}>
            <li>
              <Link href="#" className={styles.footer__link}>Tours</Link>
            </li>
            <li>
              <Link href="#" className={styles.footer__link}>Guides</Link>
            </li>
            <li>
              <Link href="#" className={styles.footer__link}>Gallery</Link>
            </li>
            <li>
              <Link href="#" className={styles.footer__link}>Restaurants</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footer_subtitle}>About</h3>
          <ul className={styles.footer__links}>
            <li>
              <Link href="#" className={styles.footer__link}>About us</Link>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>Project Repository (github)</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footer_subtitle}>Support</h3>
          <ul className={styles.footer__links}>
            <li>
              <Link href="#" className={styles.footer__link}>Contact</Link>
            </li>
            <li>
              <a href="te" className={styles.footer__link}>(+57) 307474772</a>
            </li>
            <li>
              <a href="te" className={styles.footer__link}>sebasmorales05col@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.footer__rights}`}>
        <p className={styles.footer__paragraph}>All Rights Recerved {year}</p>
      </div>
    </footer>
  )
}