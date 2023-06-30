import styles from "./AdviceCard.module.css";

export default function Loading() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}></h3>
      <blockquote className={styles.text}>
      </blockquote>
      <div className={styles.imageContainer}></div>
      <button disabled={true} className={styles.button} aria-label="Get new advice"></button>
    </div>
  );
}
