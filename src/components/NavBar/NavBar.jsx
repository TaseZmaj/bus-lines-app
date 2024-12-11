import styles from "./NavBar.module.css";
import NavItem from "./NavItem/NavItem.jsx";

//Hooks
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  let [location] = useState(useLocation().pathname);

  return (
    <nav className={styles.sideBar}>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className={styles.logo_holder}>
          <p>JSP</p>
          <i className="fa-solid fa-bus" />
        </div>
      </Link>
      <ul>
        {/* Day Lines Link */}
        <li>
          {location.includes("/day-lines") ? (
            <Link className={styles.links} to="/day-lines">
              <NavItem
                name="Day Lines"
                icon={<i className="fa-regular fa-sun" />}
                active={true}
              />
            </Link>
          ) : (
            <Link className={styles.links} to="/day-lines">
              <NavItem
                name="Day Lines"
                icon={<i className="fa-regular fa-sun" />}
                active={false}
              />
            </Link>
          )}
        </li>
        {/* Night Lines Link */}
        <li>
          {location.includes("/night-lines") ? (
            <Link className={styles.links} to="/night-lines">
              <NavItem
                name="Night Lines"
                icon={<i className="fa-regular fa-moon" />}
                active={true}
              />
            </Link>
          ) : (
            <Link className={styles.links} to="/night-lines">
              <NavItem
                name="Night Lines"
                icon={<i className="fa-regular fa-moon" />}
                active={false}
              />
            </Link>
          )}
        </li>
        {/* Suburban Lines Link */}
        <li>
          {location.includes("/suburban-lines") ? (
            <Link className={styles.links} to="/suburban-lines">
              <NavItem
                name="Suburban Lines"
                icon={<i className="fa-solid fa-mountain-city" />}
                active={true}
              />
            </Link>
          ) : (
            <Link className={styles.links} to="/suburban-lines">
              <NavItem
                name="Suburban Lines"
                icon={<i className="fa-solid fa-mountain-city" />}
                active={false}
              />
            </Link>
          )}
        </li>
        {/* Bus Stops Link */}
        <li>
          {location.includes("/bus-stops") ? (
            <Link className={styles.links} to="/bus-stops">
              <NavItem
                name="Bus Stops"
                icon={<i className="fa-solid fa-map-location-dot" />}
                active={true}
              />
            </Link>
          ) : (
            <Link className={styles.links} to="/bus-stops">
              <NavItem
                name="Bus Stops"
                icon={<i className="fa-solid fa-map-location-dot" />}
                active={false}
              />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
