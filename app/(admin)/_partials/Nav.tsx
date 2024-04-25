import Link from "next/link";
import Image from "next/image";
import styles from "../layout.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__links_container}>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/house.svg"
            alt="house"
            width={20}
            height={20}
          />
          <span>Home</span>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/grid.svg"
            alt="grid"
            width={20}
            height={20}
          />
          <span>Dashboard</span>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/bricks.svg"
            alt="bricks"
            width={20}
            height={20}
          />
          <span>Tours</span>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/person.svg"
            alt="person"
            width={20}
            height={20}
          />
          <span>Guides</span>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/building.svg"
            alt="building"
            width={20}
            height={20}
          />
          <span>Restaurants</span>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <Image
            src="/file-image.svg"
            alt="file image"
            width={20}
            height={20}
          />
          <span>Gallery</span>
        </Link>
      </div>

      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        layout="responsive"
      />
    </nav>
  );
}