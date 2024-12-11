import styles from "./Containers.module.css";
import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div className={styles.main_container}>
      <div className={styles.home_container}>
        <div className={styles.title_container}>
          <h1>JSP</h1>
          <i className="fa-duotone fa-solid fa-bus" />
        </div>
        <h2>Interactive display of JSP Bus Lines and Bus Stops</h2>
        <div className={styles.links_container}>
          <Link style={{ textDecoration: "none" }} to="/day-lines">
            <div className={styles.logo_holder}>
              <i className="fa-regular fa-sun" />
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/night-lines">
            <div className={styles.logo_holder}>
              <i className="fa-regular fa-moon" />
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/suburban-lines">
            <div className={styles.logo_holder}>
              <i className="fa-solid fa-mountain-city" />
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/bus-stops">
            <div className={styles.logo_holder}>
              <i className="fa-solid fa-map-location-dot" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
