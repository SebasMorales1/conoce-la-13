import styles from "../css/Guides.module.css";
import Link from "next/link";
import AutoSlider from "../AutoSlider";

export default function Guides() {
  return (
    <section className={styles.guides}>
      <div className={`container ${styles.guides__content}`}>
        <div className={styles.guides__info}>
          <h2 className={styles.guides__title}>Guides</h2>
          <p className={styles.guides__paragraph}>
            Do you want a personalized service? Hire specialized and trained guides to make your experience as exciting as possible.
          </p>

          <Link href="#" className={`btn-global ${styles.guides__btn}`}>
            See more
          </Link>
        </div>

        <AutoSlider
          images={["./guides1.jpg", "./guides2.jpg", "./guides3.jpg"]}
        />
      </div>
    </section>
  );
}