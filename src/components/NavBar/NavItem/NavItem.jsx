/* eslint-disable react/prop-types */

import styles from "./NavItem.module.css";

export default function NavItem(props) {
  const { name, icon, active } = props;

  if (active) {
    return (
      <div className={`${styles.container} ${styles.container_active}`}>
        <div className={styles.left}>
          <div className={styles.icon_container}>{icon}</div>
        </div>
        <div className={styles.right}>
          <p>{name}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.icon_container}>{icon}</div>
        </div>
        <div className={styles.right}>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}
