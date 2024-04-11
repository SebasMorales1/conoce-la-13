import styles from "./page.module.css";
import Link from "next/link";

// Sections of this page
import Introduction from "./components/sections/Introduction";
import ToursSection from "./components/sections/ToursSection";

export default function Home() {
  return (
    <>
      <section className={styles.banner}>
        <div className={`container ${styles.banner__content}`}>
          <h1 className={styles.banner__title}>
            Conoce la <span>13</span>
          </h1>
          <div className={styles.banner__content__btn}>
            <Link href="#" className={styles.banner__btn}>
              Explore Tours
            </Link>
          </div>
        </div>
    </section>
    <main className={styles.main}>
      <Introduction />
      <ToursSection />
    </main>
    </>
  );
}
