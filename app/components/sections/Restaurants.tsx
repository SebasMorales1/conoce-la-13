import styles from "../css/Restaurants.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Restaurants() {
  return (
    <section className={`container ${styles.restaurants}`}>
      <div className={styles.restaurants__info}>
        <h2 className={styles.restaurants__subtitle}>Restaurants</h2>
        <p className={styles.restaurants__paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus id a! Rem ad ab sapiente dolor illum. Excepturi est asperiores obcaecati tenetur cumque corporis a, deserunt unde facere doloremque.
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