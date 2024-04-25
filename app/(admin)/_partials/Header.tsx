import styles from "../layout.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__content}`}>
        <span className={styles.header__text}>Admin Panel</span>
        <button className={styles.header__btn}>
          <Image
            src="./logout.svg"
            alt="logout icon"
            width={20}
            height={20}
          />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}