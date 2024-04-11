import styles from "../css/Introduction.module.css";

export default function Introduction() {
  return (
    <section className={`container ${styles.introduction__container}`}>
      <div className={styles.introduction__info}>
        <h2 className={styles.introduction__subtitle}>Discover</h2>
        <p className={styles.introduction__description}>
        Come and discover the history of a community marked by its violent history. That has managed to leave the wounds of the past thanks to the efforts of the community through art and innovation.
        </p>
        <p className={styles.introduction__description}>
          An urban environment, helpful people, typical Colombian food and much more await you.
        </p>
      </div>
      <div className={styles.introduction__video}>
      <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/lKawu8TcRtE?si=o6Ptoi-fB-y1L9zT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </section>
  )
}