import styles from "../css/ToursSection.module.css"
import Link from "next/link"
import Image from "next/image";

export default function ToursSection() {
  return (
    <section>
      <div className={`container ${styles.tours__content}`}>
        <Image
          className={styles.tours__image}
          src="/tourbg-1.png"
          alt="tour background"
          width={700}
          height={400}
          layout="responsive"
        />
        <div className={styles.tours__info}>
          <h2 className={styles.tours__subtitle}>Tours</h2>
          <p className={styles.tours__description}>
            Take the best tours, with specialized guides. Enjoy a unique experience walking through different areas of the commune, see the graffiti that compose it and learn about the history of the commune.
          </p>
          <Link className="btn-global" href="#">See more</Link>
        </div>
      </div>
    </section>
  )
}