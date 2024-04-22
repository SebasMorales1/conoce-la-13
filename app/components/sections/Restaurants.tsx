import styles from "../css/Restaurants.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Restaurants() {
  return (
    <section className={`container ${styles.restaurants}`}>
      <div className={styles.restaurants__info}>
        <h2 className={styles.restaurants__subtitle}>Restaurants</h2>
        <p className={styles.restaurants__paragraph}>
        Enjoy restaurants near the commune, restaurants with local, foreign and street food. American food, Argentinean food and many more.
        </p>

        <Link className="btn-global" href="#">
          See More
        </Link>
      </div>
      <picture className={styles.restaurants__image_container}>
        <Image
          src="/paisa-tray.png"
          width={100}
          height={100}
          alt="paisa tray image"
          layout="responsive"
        />
      </picture>
    </section>
  );
}