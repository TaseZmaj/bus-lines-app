import styles from "./Containers.module.css";

export default function ErrorComponent() {
  return (
    <div className={`${styles.main_container} ${styles.error_container}`}>
      <h1>Error 404!</h1>
      <h2>Page not found!</h2>
      <div className={styles.gear_container}>
        <i className="fa-solid fa-gear" style={{ padding: "0" }} />
      </div>
    </div>
  );
}
